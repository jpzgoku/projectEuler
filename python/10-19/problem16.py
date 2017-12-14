# Returns the sum of the digits of a number.
def sum_of_digits(n):
    return sum([int(x) for x in str(n)])


if __name__ == '__main__':
    print(sum_of_digits(2 ** 1000))
