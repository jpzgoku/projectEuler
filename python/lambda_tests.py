from functools import reduce

def make_incrementor(n):
    return lambda x: x + n


f = make_incrementor(2)
g = make_incrementor(6)

#print(f(42))
#print(make_incrementor(22)(33))

foo = [2, 18, 9, 22, 17, 24, 8, 12, 27]

print(list(filter(lambda x: x % 3 == 0, foo)))
print(list(map(lambda x: x * 2 + 10, foo)))
print(reduce(lambda x, y: x * y, foo))
print(reduce(lambda x, y: x + y, foo))
print(sum(foo))
