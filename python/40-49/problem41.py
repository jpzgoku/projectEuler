def pandigital_primes(n=10000000):
    """Returs a list of all pandigital primes up to ``n``."""
    pri = [x for x in primes(n) if is_pandigital(x)]
    return pri


def is_pandigital(n):
    pandigital = ['1','2','3','4','5','6','7','8','9']
    pan = list(str(n))
    pan.sort()
    return pan == pandigital[:len(pan)]


def primes(n):
    """Sieve of Eratosthenes

    Args:
        n: Max number to search for primes.

    Returns:
        A list of primes under ``n``.
    """
    ps, sieve = [], [True] * (n + 1)
    for p in range(2, n + 1):
        if sieve[p]:
           ps.append(p)
           for i in range(p * p, n + 1, p):
               sieve[i] = False
    return ps



if __name__ == '__main__':
    print(pandigital_primes())
    from timeit import timeit
    print(timeit(setup="from __main__ import pandigital_primes", stmt="print(pandigital_primes())", number=1))
