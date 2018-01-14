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
    from timeit import timeit
    print(timeit(setup="from __main__ import even_fibonacci_numbers", stmt="sum(even_fibonacci_numbers(4000000))", number=1))
