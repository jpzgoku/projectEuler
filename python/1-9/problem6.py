# Returns the sum of numbers 1 squared to 'n' squared.
def sum_of_squares(n):
    return sum([x ** 2 for x in range(1, n + 1)])


# Returns the sum for all numbers from 1 to 'n' then squares that number.
def square_of_the_sum(n):
    return sum([x for x in range(1, n + 1)]) ** 2
    

print(abs(sum_of_squares(100) - square_of_the_sum(100)))
