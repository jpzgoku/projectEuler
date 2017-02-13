# Returns an array of all multiples of 3 and 5 up to but not including x.
multiples_of_three_and_five = lambda n: [x for x in range(n) if x % 3 == 0 or x % 5 == 0]


print(sum(multiples_of_three_and_five(1000)))
