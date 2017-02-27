# Returns an array of all multiples of 3 and 5 up to but not including x.
def multiples_of_three_and_five(n):
	return [x for x in range(n) if x % 3 == 0 or x % 5 == 0]


print(sum(multiples_of_three_and_five(1000)))
