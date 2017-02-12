# Returns a boolean on weather a number is a palindrome.
palindrome = lambda n: True if n == int(str(n)[::-1]) else False


# Returns n (in base 10) in base 2
binary = lambda n: int(bin(n)[2:])


def double_base_palondromes(max):
    a = [x for x in range(max) if palindrome(x)]
    return [x for x in a if palindrome(binary(x))]


print(sum(double_base_palondromes(1000000)))
