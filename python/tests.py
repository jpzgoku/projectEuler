import time, math, copy
start_time = time.time()

# Returns an array of all multiples of 3 and 5 up to but not including x.
def multiples_of_three_and_five(n):
	return [x for x in range(n) if x % 3 == 0 or x % 5 == 0]


#print(sum(multiples_of_three_and_five(1000)))
#print(time.time() - start_time)

'''def is_it_prime(n):
	half = math.ceil(n / 2) + 1
	for i in range(2, half):
		if n % i == 0:
			return False
	return True


def test(max):
	return [x for x in range(2, max + 1) if is_it_prime(x)]

print(test(120))'''


# My first attempt
def sieve_of_eratosthenes(max):
    nums = [x for x in range(2, max + 1)]
    for p in nums:
        for i in range(p + 1, max + 1):
            if i % p == 0:
                if i in nums:
                    nums.remove(i)
    return nums


# My second attempt.
# Seems slower using list comprehensions. The problem is that the code
#creates a new nums list every time and because it goes through every element
def sieve_of_eratosthenes2(max):
	nums = lambda: [x for x in range(2, max + 1)]
	nums2 = [x for x in range(2, max + 1)]
	for p in nums2:
		n = [x for x in nums() if x != p if x % p == 0]
		#if len(n) == 0:
			#break
		if len(n) <= 1:
			break
		nums2 = [x for x in nums2 if x not in n]
	return nums2


# Trial Division
def sieve(n):
    "Return all primes <= n."
    np1 = n + 1
    s = list(range(np1))
    s[1] = 0
    sqrtn = int(round(n**0.5))
    for i in range(2, sqrtn + 1):
        if s[i]:
            s[i*i: np1: i] = [0] * len(range(i*i, np1, i))
    return filter(None, s)


# sieve of eratosthenes
def primes(n):
    ps, sieve = [], [True] * (n + 1)
    for p in range(2, n + 1):
        if sieve[p]:
           ps.append(p)
           for i in range(p * p, n + 1, p):
               sieve[i] = False
    return ps


print(primes(1000000))
#print(list(sieve(1000000)))
print(time.time() - start_time)
