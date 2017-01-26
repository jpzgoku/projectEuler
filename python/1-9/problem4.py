# Returns the inversed digits of a number
def inverse_int(n):
	return int(str(n)[::-1])


# Returns a boolean on weather a number is a palindrome.
def palindrome(n):
	if n == inverse_int(n):
		return True
	return False


# Returns a list of palindrome products.
def palindrome_product(start, end):
	return [x * y for x in range(start, end) for y in range(start, end) if palindrome(x * y)]


print(max(palindrome_product(100, 1000)))
