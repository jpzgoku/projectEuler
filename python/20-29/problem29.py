def distinct_powers(xMin, xMax):
    return set([base**power for base in range(xMin, xMax + 1) for power in range(xMin, xMax + 1)])


print(len(distinct_powers(2, 100)))
