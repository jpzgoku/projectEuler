import math


def digit_factorials(n):
    '''Returns a list of all digit_factorials up to n'''


    def is_digit_factorial(n):
        digit_factorial = sum([math.factorial(int(x)) for x in str(n)])
        return digit_factorial == n


    return [x for x in range(3, n) if is_digit_factorial(x)]



if __name__ == '__main__':
    import time
    start_time = time.time()
    print(sum(digit_factorials(100000)))
    print('Time: ' + str(time.time() - start_time) + ' seconds')
