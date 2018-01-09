def self_powers(max):
    return [x ** x for x in range(1, max + 1)]


if __name__ == '__main__':
    x = str(sum(self_powers(1000)))
    print(x[len(x) - 10:])
