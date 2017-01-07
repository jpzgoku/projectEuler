def fibonacci(n):
	if n == 0 or n == 1:
		return 1
	else:
		return fibonacci(n-1) + fibonacci(n-2)


def sum_of_evens(n):
	the_sum = 0
	for i in range(1000000):
		if fibonacci(i) > n:
			return the_sum
		if fibonacci(i) % 2 == 0:
			the_sum = the_sum + fibonacci(i)


print(sum_of_evens(4000000))