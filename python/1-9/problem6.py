import math

# Returns the sum of numbers 1 squared to 'n' squared.
sum_of_squares = lambda n: sum([x ** 2 for x in range(1, n + 1)])


# Returns the sum for all numbers from 1 to 'n' then squares that number.
square_of_the_sum = lambda n: sum([x for x in range(1, n + 1)]) ** 2


print(math.fabs(sum_of_squares(100) - square_of_the_sum(100)))
