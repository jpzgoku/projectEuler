import time
start_time = time.time()


# sieve of eratosthenes
def primes(n):
    ps, sieve = [], [True] * (n + 1)
    for p in range(2, n + 1):
        if sieve[p]:
           ps.append(p)
           for i in range(p * p, n + 1, p):
               sieve[i] = False
    return ps


def truncate(n, p):

    truncate_right_to_left = lambda n, spot: int(str(n)[:len(str(n))-spot:])
    truncate_left_to_right = lambda n, spot: int(str(n)[spot:])

    arr = []
    length = len(str(n))
    for i in range(1, length):
        if truncate_right_to_left(n, i) not in p:
            return False
        if truncate_left_to_right(n, i) not in p:
            return False
    return True


def truncatable_primes(max):
    p = primes(max)
    answer = []
    for i in p:
        if i < 10:
            continue
        if truncate(i, p):
            answer.append(i)
    return answer


def truncatable_primes2(max):
    p = primes(max)
    return [x for x in p if x > 10 if truncate(x, p)]


if __name__ == '__main__':
    print(sum(truncatable_primes2(750000)))
    print(time.time() - start_time)


# Very slow
