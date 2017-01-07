import math

def isItPrime(n):
	half = math.ceil(n / 2) + 1
	for i in range(2, half):
		if n % i == 0:
			return False
	return True


def prime_factors(num):
	pfs = []

	def find_prime_factors(num):
		if isItPrime(num):
			return pfs.append(num)
		for i in range(2, num):
			if num % i == 0:
				n1 = i
				n2 = num // i
				find_prime_factors(n1)
				return find_prime_factors(n2)


	find_prime_factors(num)
	return pfs


print(prime_factors(600851475143))
print(max(prime_factors(600851475143)))