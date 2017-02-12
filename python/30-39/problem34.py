# Returns the factorial of a number without using recursion
def factorial(n):
    if n == 0:
        return 1
    product = n
    for i in range(n - 1, 0, -1):
        product = product * i
    return product


# Turn a number into a list of digits.
int_to_list = lambda n: [int(x) for x in str(n)]


# Returns a list of the factorials of the digits in 'n'.
factorial_list = lambda n: [factorial(x) for x in int_to_list(n)]


# Returns a list of numbers that equal the sum of the factorials of their digits up to 'max'.
digit_factorials = lambda max: [x for x in range(3, max) if x == sum(factorial_list(x))]


print(sum(digit_factorials(100000)))
