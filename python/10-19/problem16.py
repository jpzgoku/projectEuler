def sum_of_digits(n):
    '''Returns the sum of the digits of a number.'''
    return sum([int(x) for x in str(n)])


if __name__ == '__main__':
    print(sum_of_digits(2 ** 1000))
