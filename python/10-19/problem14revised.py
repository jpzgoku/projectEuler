def longest_collatz_sequence(n):


    def collatz(origional, counter, new_val):
        if new_val == 1:
            collatz_sequence[origional] = counter
            return
        elif new_val in collatz_sequence:
            counter += collatz_sequence[new_val] - 1
            collatz_sequence[origional] = counter
            return
        elif new_val % 2 == 0:
            counter += 1
            collatz(origional, counter, new_val // 2)
        else:
            counter += 1
            collatz(origional, counter, 3 * new_val + 1)


    collatz_sequence = {}

    for i in range(1, n):
        counter = 1
        collatz(i, counter, i)
    return max(collatz_sequence, key=collatz_sequence.get)


if __name__ == '__main__':
    import time
    start_time = time.time()
    print(longest_collatz_sequence(1000000))
    print('Time: ' + str(time.time() - start_time) + ' seconds')
