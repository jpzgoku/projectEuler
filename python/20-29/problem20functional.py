from functools import reduce


def factorial(n):
    '''Returns the factorial of a number without using recursion'''
    return list_product([x for x in range(n, 0, -1)])


def list_product(arr):
    '''Returns the product of a list.'''
    return reduce(lambda x, y: x * y, arr)


def sum_of_digits(n):
    '''Returns the sum of the digits of a number.'''
    return sum([int(x) for x in str(n)])


if __name__ == '__main__':
    import time
    start_time = time.time()
    print(sum_of_digits(factorial(100)))
    print('Time: ' + str(time.time() - start_time) + ' seconds')
