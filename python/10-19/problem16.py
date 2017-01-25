# Returns the sum of the digits of a number.
def sum_of_digits(n):
    answer = 0
    x = str(n)
    for i in range(len(x)):
        answer = answer + int(x[i])
    return answer


print(sum_of_digits(2 ** 1000))
