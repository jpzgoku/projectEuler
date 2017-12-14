from fractions import gcd
from functools import reduce


# Calculate the lowest common multiple of two integers a and b
def lowest_common_multiple(a, b):
    return (a * b) // gcd(a, b)


if __name__ == '__main__':
    print(reduce(lowest_common_multiple, range(1, 21)))
