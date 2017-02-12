# Returns all the numbers that can be written as the sum of 'p' powers of their digits.
def digit_x_powers(max, p):
    num_sqr = lambda n, p: sum([(int(n[x]) ** p) for x in range(len(n))])
    return [x for x in range(2, max) if num_sqr(str(x), p) == x]


print(sum(digit_x_powers(200000, 5)))
