from functools import reduce


# Returns the factorial of a number without using recursion
def factorial(n):
    return list_product([x for x in range(n, 0, -1)])


# Returns the product of a list.
def list_product(arr):
    return reduce(lambda x, y: x * y, arr)


# Returns the sum of the digits of a number.
def sum_of_digits(n):
    return sum([int(x) for x in str(n)])


if __name__ == '__main__':
    print(sum_of_digits(factorial(100)))
