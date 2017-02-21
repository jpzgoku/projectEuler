from fractions import gcd
from functools import reduce


# Calculate the lowest common multiple of two integers a and b
def lcm(a,b):
    return a*b//gcd(a,b)


print(reduce(lcm, range(1,20+1)))

# Found it online. Don't understand it.