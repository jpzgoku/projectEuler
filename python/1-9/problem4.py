# Returns a boolean on weather a number is a palindrome.
def palindrome(n):
    inverse_int = int(str(n)[::-1])
    if n == inverse_int:
        return True
    return False


# Returns a list of palindrome products.
def palindrome_product(start, end):
    r = range(start, end)
    return [x * y for x in r for y in r if palindrome(x * y)]


if __name__ == '__main__':
    print(max(palindrome_product(100, 1000)))
