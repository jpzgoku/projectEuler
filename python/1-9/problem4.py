def palindrome(n):
	string = str(n)
	array = []
	for l in string:
		array.append(l)
	array.reverse()
	pal = ''.join(array)
	return int(pal)


def palindrome_product(start, end):
	products = []
	for i in range(start, end):
		for j in range(start, end):
			product = i * j
			if product == palindrome(product):
				products.append(product)
	return products


print(max(palindrome_product(100, 1000)))