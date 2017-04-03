from functools import reduce


# Returns the product of a list.
def list_product(arr):
    return reduce(lambda x, y: x * y, arr)


def lattice_paths(x, y):
    surface_area = x + y
    d = y if x > y else x

    mul1 = [surface_area - x for x in range(d)]
    mul2 = [x + 1 for x in range(d)]

    return list_product(mul1) // list_product(mul2)


print(lattice_paths(20, 20))
