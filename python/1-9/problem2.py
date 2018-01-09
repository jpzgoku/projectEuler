def even_fibonacci_numbers(n):
    '''Returns a list of even fibonacci numbers under 'n'.

    Args:
        n: The max value of a fibonacci number to be included.

    Returns:
        A list of all the even fibonacci numbers under 'n'
    '''
    fib = [1,1]
    while True:
        new_val = fib[-1] + fib[-2]
        if new_val > n:
            break
        fib.append(new_val)
    return [x for x in fib if x % 2 == 0]


if __name__ == '__main__':
    import time
    start_time = time.time()
    print(sum(even_fibonacci_numbers(4000000)))
    print('Time: ' + str(time.time() - start_time) + ' seconds')
