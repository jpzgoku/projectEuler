'''Creates a callable class to find the longest collatz sequence up to ``n``.
Maintains state between calls so you don't have to do the same calculations over again.

Usage:
    longest = LongestCollatzSequence()
    longest(1000000)
    longest(999998)
    longest(14)
'''

class LongestCollatzSequence:

    def __init__(self):
        self._cache = {}


    def __call__(self, n):
        """When instantiated the __call__ method will act like a normal function."""
        for i in range(1, n):
            counter = 1
            self._collatz(i, counter, i)
        collatz_sequence = {item: self._cache[item] for item in self._cache if item <= n}
        return max(collatz_sequence, key=collatz_sequence.get)


    def _collatz(self, origional, counter, new_val):
        if new_val == 1:
            self._cache[origional] = counter
            return
        elif new_val in self._cache:
            counter += self._cache[new_val] - 1
            self._cache[origional] = counter
            return
        elif new_val % 2 == 0:
            counter += 1
            self._collatz(origional, counter, new_val // 2)
        else:
            counter += 1
            self._collatz(origional, counter, 3 * new_val + 1)


if __name__ == '__main__':
    longest = LongestCollatzSequence()
    from timeit import timeit
    print(timeit(setup="from __main__ import longest", stmt="print(longest(1000000))", number=1))
    print(timeit(setup="from __main__ import longest", stmt="print(longest(999998))", number=1))
    print(timeit(setup="from __main__ import longest", stmt="print(longest(14))", number=1))
