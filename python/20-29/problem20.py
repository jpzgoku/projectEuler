from functools import reduce

# Returns the factorial of a number without using recursion
factorial = lambda n: list_product([x for x in range(n - 1, 0, -1)])


# Returns the product of a list.
list_product = lambda arr: reduce(lambda x, y: x * y, arr)


# Returns the sum of the digits of a number.
sum_of_digits = lambda n: sum([int(x) for x in str(n)])


print(sum_of_digits(factorial(100)))
