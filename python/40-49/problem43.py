from itertools import permutations

def pan_list():
    p = list(permutations(range(0,10)))
    ssd = [x for x in p if is_sub_string_divisible(x)]
    return [concat_tup_integers(x) for x in ssd]


def is_sub_string_divisible(tup):
    n = lambda a, b, c: int(str(tup[a]) + str(tup[b]) + str(tup[c]))
    if n(1, 2, 3) % 2 != 0:
        return False
    if n(2, 3, 4) % 3 != 0:
        return False
    if n(3, 4, 5) % 5 != 0:
        return False
    if n(4, 5, 6) % 7 != 0:
        return False
    if n(5, 6, 7) % 11 != 0:
        return False
    if n(6, 7, 8) % 13 != 0:
        return False
    if n(7, 8, 9) % 17 != 0:
        return False
    return True


def concat_tup_integers(tup):
    """Concatenates a tuple of integers."""
    answer = ''
    for val in tup:
        answer += str(val)
    return int(answer)


def main():
    p = pan_list()
    print(sum(p))


if __name__ == '__main__':
    main()
