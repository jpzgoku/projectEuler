def palindrome(n):
    '''Returns a boolean on weather a number is a palindrome.'''
    return n == int(str(n)[::-1])


def palindrome_product(start, end):
    '''Returns a list of palindrome products.'''
    r = range(start, end)
    return [x * y for x in r for y in r if palindrome(x * y)]


if __name__ == '__main__':
    print(max(palindrome_product(100, 1000)))
