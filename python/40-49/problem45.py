def problem45(start):

    pentagonal = lambda n: (i * ((3 * i) - 1)) // 2
    hexagonal = lambda n: n * ((2 * n) - 1)

    p = 1
    h = 1

    for i in range(start, 1000000000):
        t = (i * (i + 1)) // 2
        while pentagonal(p) < t:
            p += 1
        while hexagonal(h) < t:
            h += 1
        if t == pentagonal(p) and t == hexagonal(h):
            return t


print(problem45(286))
