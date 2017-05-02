def distinct_powers(aMax, bMax):
    return set([a**b for a in range(2, aMax + 1) for b in range(2, bMax + 1)])


print(len(distinct_powers(100, 100)))