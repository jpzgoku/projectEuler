def even_fibonacci_numbers(n):
    '''Returns an list of even fibonacci numbers up to x.'''
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
