import math


def factorial_digit_sum(n):
    '''Returns the sum of all digits of a factorial'''
    factorial_string = str(math.factorial(n))
    return sum([int(x) for x in factorial_string])


if __name__ == '__main__':
    import time
    start_time = time.time()
    print(factorial_digit_sum(100))
    print('Time: ' + str(time.time() - start_time) + ' seconds')
