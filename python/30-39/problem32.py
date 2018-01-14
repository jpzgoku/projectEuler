def pandigital_products():

    def check_length(tup):
        """Make sure the set of numbers is 9 digits long and dosent have any repeating digits or '0's"""
        string = str(tup[0]) + str(tup[1]) + str(tup[2])
        if '0' in string:
            return False
        return len(set(string)) == 9 and len(string) == 9
    

    two_digits = range(2, 100)
    four_digits = range(2, 10000)

    # Create a list of tuples where the multiplicand, multiplier and product are 9 digits long and dont have any '0's and don't have any repeating digits.
    p = [(x, y, x * y) for x in two_digits for y in four_digits if check_length((x, y, x * y))]

    # Remove the duplicate products and return the sum.
    return sum({x[2] for x in p})


if __name__ == '__main__':
    print(pandigital_products())
