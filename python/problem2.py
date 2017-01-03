def fibonacci(n):
	if n == 0 or n == 1:
		return 1
	else:
		print(fibonacci(n-1) + fibonacci(n-2))


fibonacci(5)