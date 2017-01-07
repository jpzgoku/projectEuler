def test():
	fruits = ["apples", "Pears", "Oranges", "Grapes"]
	for f in fruits:
		print(f)
		if f == "Oranges":
			break
	return "Did it work?"


print(test())

# '//' is the math int operator. Use it when you dont want a float