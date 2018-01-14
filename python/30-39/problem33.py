'''Not finished yet. I need to write a function to find lowest common terms.'''

def digit_canceling_fractions():
    '''Returns every non-trivial digit canceling fraction.'''
    fractions = []
    for denominator in range(11,100):
        for numerator in range(10, denominator):

            # Checks for numbers with recurring digits
            if numerator % 11 == 0 or denominator % 11 == 0:
                continue

            # Checks for a recurring number between the two numbers
            if len(set(str(numerator) + str(denominator))) != 3:
                continue

            # Checks for non-trivial digit canceling fractions
            simplifed_frac = recurring_digits(numerator, denominator)
            if numerator / denominator == simplifed_frac:
                fractions.append((numerator, denominator))

    return fractions


def recurring_digits(num1, num2):
    str1 = str(num1)
    str2 = str(num2)

    if '0' in str1 or '0' in str2:
        return False

    if str1[0] == str2[0]:
        return int(str1[1]) / int(str2[1])
    elif str1[0] == str2[1]:
        return int(str1[1]) / int(str2[0])
    elif str1[1] == str2[0]:
        return int(str1[0]) / int(str2[1])
    elif str1[1] == str2[1]:
        return int(str1[0]) / int(str2[0])


if __name__ == '__main__':
    print(digit_canceling_fractions())
