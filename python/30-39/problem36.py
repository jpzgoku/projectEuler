# Returns a boolean on weather a number is a palindrome.
def palindrome(n):
    return True if n == int(str(n)[::-1]) else False


# Returns n (in base 10) in base 2
def binary(n):
    return int(bin(n)[2:])


def double_base_palondromes(max):
    a = [x for x in range(max) if palindrome(x)]
    return sum([x for x in a if palindrome(binary(x))])


if __name__ == '__main__':
    print(double_base_palondromes(1000000))
