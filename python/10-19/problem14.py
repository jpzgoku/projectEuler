'''Find the longest collatz sequence from 1 to ``n``.
Maintains state between calls by creating a closure.
This way repeated lookups will be much faster.
This is because you won't have to redo the same calculations in between calls.

Usage:
    longest = longest_collatz_sequence()
    longest(1000000)
    longest(999998)
    longest(13)
'''

def longest_collatz_sequence():

    collatz_nums = {}

    def collatz(origional, counter, new_val):
        if new_val == 1:
            collatz_nums[origional] = counter
            return
        elif new_val in collatz_nums:
            counter += collatz_nums[new_val] - 1
            collatz_nums[origional] = counter
            return
        elif new_val % 2 == 0:
            counter += 1
            collatz(origional, counter, new_val // 2)
        else:
            counter += 1
            collatz(origional, counter, 3 * new_val + 1)

    def find_longest_sequence(n):
        for i in range(1, n + 1):
            counter = 1
            collatz(i, counter, i)
        collatz_sequence = {item: collatz_nums[item] for item in collatz_nums if item <= n}
        return max(collatz_sequence, key=collatz_sequence.get)

    return find_longest_sequence


if __name__ == '__main__':
    longest = longest_collatz_sequence()
    from timeit import timeit
    print(timeit(setup="from __main__ import longest", stmt="print(longest(1000000))", number=1))
    print(timeit(setup="from __main__ import longest", stmt="print(longest(999998))", number=1))
    print(timeit(setup="from __main__ import longest", stmt="print(longest(14))", number=1))
