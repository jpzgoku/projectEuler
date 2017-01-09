import math

def isItPrime(n):
	half = int(math.ceil(n // 2) + 1)
	for i in range(2, half):
		if n % i == 0:
			return False
	return True


def nth(num, callback):
	arr = []
	for i in range(2, 1000000):
		if callback(i):
			arr.append(i);
			if len(arr) == num:
				arr.reverse()
				return arr[0]


print(nth(10001, isItPrime))