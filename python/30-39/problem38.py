# Turn a number into a list of digits.
def int_to_list(n):
    return[int(x) for x in str(n)]


# Changes a list of numbers into an integer
def list_to_int(arr):
    return int(''.join(map(str, arr)))


# Multiplies 'n' by [1..10], concatenates those results and returns
# the concatenated number when it reaches at least nine digits long.
def nine_digits(n):
    answer = []
    for i in range(10):
        if len(answer) >= 9:
            return list_to_int(answer)
        answer = answer + int_to_list(n * i)


# Checks to see if a number is a 9 digit pandigital number.
def pandigital_check(n):
    l = int_to_list(n)
    if len(l) != 9 or len(set(l)) != 9:
        return False
    for d in l:
        if d == 0:
            return False
    return True


# Returns a list of all the pandigital multiples.
def pandigital_multiples():
    return [x for x in range(1, 10001) if pandigital_check(nine_digits(x))]


print(max(pandigital_multiples()))
