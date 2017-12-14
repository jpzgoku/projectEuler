from decimal import *
getcontext().prec = 1970


def reciprocal_cycles(max):
    longest = 0
    answer = 0
    for i in range(2, max):
        x = recurring_cycle(remove_decimal(Decimal(1) / Decimal(i)))
        if x is None:
            continue
        if len(x) > longest:
            longest = len(x)
            answer = i
    return [answer, longest]


# Takes a number between 1 and 0 and removes the 0 and the decimal point
def remove_decimal(n):
    return str(n)[2:]


# Not perfect.
# The problem is that if the cycle starts with recurring numbers
# then that is the cycle that it looks for.
# Returns the recurring cycle of numbers in a string of numbers
def recurring_cycle(n):
    for i in range(len(n)):
        x = n[i]
        # Temporary fix is the 'range(i + 2'.
        for j in range(i + 2, len(n)):
            if x == n[j]:
                # print(n[j])
                y = n[i:j]
                l = len(y)
                if y == n[i+l:j+l]:
                    return y
                else:
                    continue


if __name__ == '__main__':
    print(reciprocal_cycles(1000))
    # print(recurring_cycle(remove_decimal(Decimal(1) / Decimal(983))))
