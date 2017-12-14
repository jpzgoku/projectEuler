# sieve of eratosthenes
def primes(n):
    ps, sieve = [], [True] * (n + 1)
    for p in range(2, n + 1):
        if sieve[p]:
            ps.append(p)
            for i in range(p * p, n + 1, p):
                sieve[i] = False
    return ps


def nth_prime(n):
    p = primes(n * 100)
    return p[n - 1]


if __name__ == '__main__':
    print(nth_prime(10001))
