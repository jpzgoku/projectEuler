'''Create a function that creates a list of numbers that are multiples of a group of numbers

Usage:
    three_and_five = multiples_of(3, 5)
    three_and_five(1000)
'''

def multiples_of(*args):
    '''Returns a closure of a function that checks for any multiples of ``*args``.

    Args:
        *args: Any amount of numbers.

    Returns:
        A function with that makes a list of numbers up to ``n`` that are multiples of any of the numbers previously provided by the args argument.
    '''

    def inner(n):
        multiples = set()
        for item in args:
            multiples = multiples.union([x for x in range(n) if x % item == 0])
        return multiples

    return inner


def main():
    three_and_five = multiples_of(3, 5)
    print(sum(three_and_five(1000)))


if __name__ == '__main__':
    main()
