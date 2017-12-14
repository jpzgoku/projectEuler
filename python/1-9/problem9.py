from functools import reduce


# Returns the first pythagorean triplet that it finds for 'num'.
def pythagorean_triplet(num):
    products = []
    for c in range(1, num):
        for b in range(1, c):
            for a in range(1, b):
                if a ** 2 + b ** 2 == c ** 2 and a + b + c == num:
                    return a, b, c


# Returns the product of a list.
def list_product(arr):
    return reduce(lambda x, y: x * y, arr)


if __name__ == '__main__':
    print(list_product(pythagorean_triplet(1000)))
