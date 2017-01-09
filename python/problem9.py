import math

def pythagorean_triplet(num):


	def check1(a, b, c):
		if math.pow(a, 2) + math.pow(b, 2) == math.pow(c, 2):
			return True
		return False


	def check2(a, b, c, num):
		if a + b + c == num:
			return True
		return False


	products = []
	for c in range(1, num):
		for b in range(1, c):
			for a in range(1, b):
				if check1(a, b, c) and check2(a, b, c, num):
					return a, b, c


def pythagorean_triplet_product(nums):
	a = nums[0]
	b = nums[1]
	c = nums[2]
	return a * b * c


print(pythagorean_triplet_product(pythagorean_triplet(1000)))
