def sum_square_difference(n):

    # Sum of numbers 1 squared to 'n' squared.
    sum_of_squares = sum([x ** 2 for x in range(1, n + 1)])

    # Sum for all numbers from 1 to 'n' then squares that number.
    square_of_the_sum = sum([x for x in range(1, n + 1)]) ** 2

    return abs(sum_of_squares - square_of_the_sum)


if __name__ == '__main__':
    print(sum_square_difference(100))
