from fractions import gcd
from functools import reduce


def lowest_common_multiple(a, b):
    '''Calculate the lowest common multiple of two integers a and b'''
    return (a * b) // gcd(a, b)


if __name__ == '__main__':
    print(reduce(lowest_common_multiple, range(1, 21)))
