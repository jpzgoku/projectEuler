def is_palindrome(x):
    '''Returns a boolean on wether a number or string is a palindrome.

    Args:
        x: Number or string

    Returns:
        Boolean
    '''
    x = str(x)
    return x == x[::-1]


def binary(n):
    '''Changes n (in base 10) to base 2

    Args:
        n: Number

    Return:
        'n' in binary.
    '''
    return int(bin(n)[2:])


def double_base_palindromes(max):
    '''Retuns a list of every number that is a palindrome in both base 10 and base 2.

    Args:
        max: The max number to search for double base palindromes.

    Returns:
        A list of every double base palindrome from 1 to max.
    '''
    return [x for x in range(max + 1) if is_palindrome(x) and is_palindrome(binary(x))]


def main():
    print(sum(double_base_palindromes(1000000)))


if __name__ == '__main__':
    main()
