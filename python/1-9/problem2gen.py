def fibonacci():
    '''Fibonacci number iterable.

    Yields:
        Fibonacci numbers
    '''
    older_value = 0
    old_value = 1
    yield 1
    while True:
        new_val = older_value + old_value
        yield new_val
        older_value = old_value
        old_value = new_val


def even_fibonacci_sum(n):
    '''Return the sum of all even fibonacci numbers that are less than 'n'.

    Args:
        n: The max value of a fibonacci number to be included.

    Returns:
        A sum of all the even fibonacci numbers under 'n'
    '''
    answer = 0
    f = fibonacci()
    while True:
        iterator = next(f)
        if iterator >= n:
            return answer
        if iterator % 2 == 0:
            answer += iterator


def main():
    import time
    start_time = time.time()
    print(even_fibonacci_sum(4000000))
    print('Time: ' + str(time.time() - start_time) + ' seconds')


if __name__ == '__main__':
    main()
