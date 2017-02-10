import time, math, copy
start_time = time.time()

# Turn a number into a list of digits.
def int_to_list(num):
    return [int(x) for x in str(num)]


# sieve of eratosthenes
def primes(n):
    ps, sieve = [], [True] * (n + 1)
    for p in range(2, n + 1):
        if sieve[p]:
           ps.append(p)
           for i in range(p * p, n + 1, p):
               sieve[i] = False
    return ps


# Rotates a list by putting the first value at the end.
def rotate_list(arr):
    a = arr[0]
    b = arr[1:]
    b.append(a)
    return b


# Changes a list of numbers into an integer
def list_to_int(arr):
    return int(''.join(map(str,arr)))


def cirrcular_primes(max):
    answer = []
    p = primes(max)
    for i in p:
        a = int_to_list(i)
        arr = []
        for j in range(len(a)):
            a = rotate_list(a)
            if list_to_int(a) not in p:
                continue
            else:
                arr.append(i)
            if len(arr) == len(a):
                answer.append(i)
    return answer



def cirrcular_primes2(max):
    answer = [2, 3, 5, 7]
    p = primes(max)
    for i in p:
        a = int_to_list(i)
        arr = []
        for j in range(len(a) - 1):
            a = rotate_list(a)
            #print(a)
            if list_to_int(a) in p:
                arr.append(i)
            else:
                break
            if len(arr) == len(a) - 1:
                answer.append(i)
    return answer



print(len(cirrcular_primes2(1000000)))
print(time.time() - start_time)
