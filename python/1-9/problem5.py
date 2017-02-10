# Too brute force. Needs work.

def is_it_divisible(num, mul):
	for i in range(1, mul):
		if num % i != 0:
			return False
	return True


def smallestMultiple(mul):
	for i in range(1, 1000000000):
		if is_it_divisible(i, mul):
			return i


print(smallestMultiple(20))
