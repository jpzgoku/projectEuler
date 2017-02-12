# Returns a boolean or their product on weather a multiplicand, a multiplier, and thier product
# make up a pandigital number when concatenated together.
def is_pandigital_product(multiplicand, multiplier):
    product = multiplicand * multiplier
    if check_for_zeros(product):
        return False
    x = int_to_list(int(str(multiplicand) + str(multiplier) + str(product)))
    if len(x) != 9 or len(set(x)) != 9:
        return False
    else:
        return product


# Turn a number into a list of digits.
def int_to_list(num):
    return [int(x) for x in str(num)]


# Returns a bool on weather there is a zero digit in a number.
def check_for_zeros(num):
    li = int_to_list(num)
    for i in li:
        if i == 0:
            return True
    return False


def pandigital_products(max):
    answer = [];
    for multiplicand in range(2, max):
        if check_for_zeros(multiplicand):
            continue
        if len(str(multiplicand)) != len(set(int_to_list(multiplicand))):
            continue
        for multiplier in range(2, multiplicand):
            if len(str(multiplier)) != len(set(int_to_list(multiplier))):
                continue
            if check_for_zeros(multiplier):
                continue
            length = len(str(multiplicand)) + len(str(multiplier))
            if length > 5:
                continue
            x = int_to_list(int(str(multiplicand) + str(multiplier)))
            if length != len(set(x)):
                continue
            if is_pandigital_product(multiplicand, multiplier):
                answer.append(is_pandigital_product(multiplicand, multiplier))
    return set(answer)


print(sum(pandigital_products(5000)))


# This is a mess. Redo it!
