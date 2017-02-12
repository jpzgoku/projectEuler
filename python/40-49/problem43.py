# Turn a number into a list of digits.
def int_to_list(num):
    return [int(x) for x in str(num)]


def zero_nine_pandigital():
    return [x for x in range(1023456789, 9876543211) if is_pandigital(x)]


# Checks to see if a number is a 9 digit pandigital number.
def is_pandigital(n):
    l = int_to_list(n)
    if len(l) != 10 or len(set(l)) != 10:
        return False
    return True


print(zero_nine_pandigital())

'''This won't work because it takes too long to find all the 0-9
pandigital numbers with brute force. I need to figure out the
lexicographic permutations problem so that I can quickly get all
of the possible variations of those 10 digits.'''
