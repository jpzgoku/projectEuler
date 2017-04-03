# Finds the fibonacci without using recursion.
def fibonacci(n):
    answer = [1, 1]
    for i in range(1, n - 1):
        answer.append(answer[i] + answer[i - 1])
    return answer.pop()


# Finds how many digits a number is.
def num_of_digits(n):
    return len(str(n))


# Finds the first number to have X amount of digits.
def x_digits(d, func):
    for i in range(1, 1000000000):
        if num_of_digits(fibonacci(i)) >= d:
            return i


print(x_digits(1000, fibonacci))
