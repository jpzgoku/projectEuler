import math
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


def composites(n):
    answer = []
    p = primes(n)
    for i in range(4, n):
        if i in p:
            continue
        else:
            answer.append(i)
    return answer


def goldbach(n):
    p = primes(n)
    p.reverse()
    for value in p:
        for i in range(1, n):
            if value + (2 * (i ** 2)) > n:
                continue
            if value + (2 * (i ** 2)) == n:
                return False
    return True


def feed():
    a = composites(10000)
    for n in a:
        if n % 2 == 0:
            continue
        if goldbach(n):
            return n


print(feed())
print(time.time() - start_time)


# Really slow
