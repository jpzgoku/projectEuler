def distinct_powers(xMin, xMax):
    return {base**power for base in range(xMin, xMax + 1) for power in range(xMin, xMax + 1)}


if __name__ == '__main__':
    print(len(distinct_powers(2, 100)))
