from functools import reduce

# Returns the first pythagorean triplet that it finds for 'num'.
def pythagorean_triplet(num):

	check1 = lambda a, b, c: True if a ** 2 + b ** 2 == c ** 2 else False
	check2 = lambda a, b, c, num: True if a + b + c == num else False

	products = []
	for c in range(1, num):
		for b in range(1, c):
			for a in range(1, b):
				if check1(a, b, c) and check2(a, b, c, num):
					return a, b, c


# Returns the product of a list.
def list_product(arr):
	return reduce(lambda x, y: x * y, arr)


print(list_product(pythagorean_triplet(1000)))
