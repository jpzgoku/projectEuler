def mult_three(a, b, c):
    return a * b * c


print(mult_three(2,3,4))


mult_two_with_nine = lambda a, b: mult_three(a, b, 9)

print(mult_two_with_nine(2,3))
