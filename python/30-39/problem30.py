# Returns the sum of all the numbers that can be written as the sum
# of 'p' powers of their digits.
def digit_x_powers(max, p):
    return [x for x in range(2, max) if num_sqr(str(x), p) == x]


def num_sqr(n, p):
    return sum([(int(n[x]) ** p) for x in range(len(n))])


print(sum(digit_x_powers(200000, 5)))
