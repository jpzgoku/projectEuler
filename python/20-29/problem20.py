# Returns the factorial of a number without using recursion
def factorial(n):
    product = n
    for i in range(n - 1, 0, -1):
        product = product * i
    return product


# Returns the sum of the digits of a number.
def sum_of_digits(n):
    answer = 0
    x = str(n)
    for i in range(len(x)):
        answer = answer + int(x[i])
    return answer


print(sum_of_digits(factorial(100)))
