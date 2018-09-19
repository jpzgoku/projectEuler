# Sieve of Eratosthenes
# Code by David Eppstein, UC Irvine, 28 Feb 2002
# http://code.activestate.com/recipes/117119/

def gen_primes():
    """ Generate an infinite sequence of prime numbers.
    """
    # Maps composites to primes witnessing their compositeness.
    # This is memory efficient, as the sieve is not "run forward"
    # indefinitely, but only as long as required by the current
    # number being tested.
    #
    D = {}

    # The running integer that's checked for primeness
    q = 2

    while True:
        if q not in D:
            # q is a new prime.
            # Yield it and mark its first multiple that isn't
            # already marked in previous iterations
            #
            yield q
            D[q * q] = [q]
        else:
            # q is composite. D[q] is the list of primes that
            # divide it. Since we've reached q, we no longer
            # need it in the map, but we'll mark the next
            # multiples of its witnesses to prepare for larger
            # numbers
            #
            for p in D[q]:
                D.setdefault(p + q, []).append(p)
            del D[q]

        q += 1


def is_it_prime():

    primes = []
    gen = gen_primes()
    primes.append(next(gen))

    def inner(n):
        while True:
            if n in primes:
                return True
            if n > primes[-1]:
                primes.append(next(gen))
            elif n < primes[-1]:
                return False

    return inner


if __name__ == '__main__':
    from timeit import timeit
    is_prime = is_it_prime()
    print(timeit(setup="from __main__ import is_prime", stmt="print(is_prime(100000))", number=1))
    print(timeit(setup="from __main__ import is_prime", stmt="print(is_prime(200000))", number=1))
    print(timeit(setup="from __main__ import is_prime", stmt="print(is_prime(100000))", number=1))
