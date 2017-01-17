def test():
	fruits = ["apples", "Pears", "Oranges", "Grapes"]
	for f in fruits:
		print(f)
		if f == "Oranges":
			break
	return "Did it work?"


#print(test())

# '//' is the math int operator. Use it when you dont want a float

def sieve(n):
	arr = []
	arr2 = []
	for i in range(2, n):
		arr.append(i)
	for j in range (2, n, 2):
		arr2.append(j)
	return arr2


#print(sieve(2000000))

sie = [x for x in range(2, 2000001)]
step2 = [x for x in sie if x % 2 != 0]
step3 = [x for x in step2 if x % 3 != 0]
step4 = [x for x in step3 if x % 5 != 0]
step5 = [x for x in step4 if x % 7 != 0]

#print(sum(step5))

noprimes = [j for i in range(2, 8) for j in range(i*2, 2000001, i)]
primes = [x for x in range(2, 2000001) if x not in noprimes]

print(primes)