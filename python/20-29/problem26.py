from decimal import *
getcontext().prec = 200


def reciprocal_cycles(max):
    longest = 0;
    answer = 0
    for i in range(2, max):
        x = recurring_cycle(remove_decimal(Decimal(1) / Decimal(i)))
        if x == None:
            continue
        if len(x) > longest:
            longest = len(x)
            answer = i
    return [answer, longest]


# Takes a number between 1 and 0 and removes the 0 and the decimal point
def remove_decimal(n):
    s = str(n)[2:]
    print(s)
    return s


# This needs work. Not corret yet
# Returns the recurring cycle of numbers in a string of numbers
def recurring_cycle(n):
    for i in range(len(n)):
        x = n[i]
        for j in range(i + 1, len(n)):
            if x == n[j]:
                y = n[i:j]
                #print(y)
                l = len(y)
                if y == n[i+l:j+l]:
                    return y
                else:
                    continue


print(reciprocal_cycles(1000))
#print(recurring_cycle(remove_decimal(Decimal(1) / Decimal(6))))