import math


def is_it_prime(n):
    if n < 0:
        return False
    half = math.ceil(n / 2) + 1
    for i in range(2, half):
        if n % i == 0:
            return False
    return True


def consecutive_primes(a, b):
    arr = []
    for n in range(1000):
        v = (n**2 + (a * n)) + b
        if is_it_prime(v):
            arr.append(v)
        else:
            return arr


def quadratic_primes(n):
    answer = []
    longest = 0
    for a in range(-n, n):
        for b in range(-n, n + 1):
            if len(consecutive_primes(a, b)) > longest:
                longest = len(consecutive_primes(a, b))
                answer = [a, b]
    return answer[0] * answer[1]


print(quadratic_primes(1000))
