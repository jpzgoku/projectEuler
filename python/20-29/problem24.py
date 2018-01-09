'''Find the nth permutation of an iterable

Usage:
    python nth_permutation(1000000, range(10))
    python nth_permutation(5, list('john'))
'''
from itertools import permutations

def nth_permutation(nth, iterable):
    '''Returs the nth permutation of a string, list, or other iterable.

    Args:
        nth: nth permutation
        iterable: The set of numbers or letters used for the permutations

    Returns:
        The nth permutation.
    '''
    arr = list(permutations(iterable))
    return arr[nth - 1]


if __name__ == '__main__':
    print(nth_permutation(1000000, range(10)))
    print(nth_permutation(5, 'john'))
