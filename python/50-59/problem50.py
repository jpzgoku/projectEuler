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


def consecutive_primes(max):
    answer = []
    p = primes(max)
    for i in range(len(p)):
        for j in range(i + 1, len(p)):
            if j - i < len(answer):
                continue
            x = [p[x] for x in range(i, j)]
            if sum(x) > max:
                break
            if sum(x) in p:
                if len(x) > len(answer):
                    answer = x
    return [answer, sum(answer)]


print(consecutive_primes(1000000))
print(time.time() - start_time)
