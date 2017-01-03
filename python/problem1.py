multiples = []

def multiples_of_three_and_five(n):
    for i in range(n):
        if i % 3 == 0 or i % 5 == 0:
        	multiples.append(i)
    print(sum(multiples))


multiples_of_three_and_five(1000)