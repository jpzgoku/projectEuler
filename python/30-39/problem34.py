# Returns the factorial of a number without using recursion
def factorial(n):
    if n == 0:
        return 1
    product = n
    for i in range(n - 1, 0, -1):
        product = product * i
    return product


# Turn a number into a list of digits.
def int_to_list(num):
    return [int(x) for x in str(num)]


# Returns a list of the factorials of the digits in 'n'.
def factorial_list(n):
    return [factorial(x) for x in int_to_list(n)]
    

# Returns a list of numbers that equal the sum of the factorials of their
# digits up to 'max',
def digit_factorials(max):
    return [x for x in range(3, max) if x == sum(factorial_list(x))]


print(sum(digit_factorials(100000)))
