def pandigital_multiple_generator(n):
    pan = n
    for i in range(2, 10):
        new_val = n * i
        pan = int(str(pan) + str(new_val))
        yield pan


def is_9_digit_pandigital(n):
    st = str(n)
    return '0' not in st and len(st) == 9 == len(set(st)) # len(st) == 9 and len(set(st)) == 9


def pandigital_multiples(m=10000):
    """Returns the largest pandigital multiple up to ``m``.

    Args:
        m: Maximum value to search for pandigital multiples. Defaults to 10000.

    Returns:
        Largest pandigital multiple.
    """
    m = min(m, 10000)
    answer = []
    for i in range(1, m):
        pan_gen = pandigital_multiple_generator(i)

        while True:
            pan_num = next(pan_gen)
            if is_9_digit_pandigital(pan_num):
                answer.append(pan_num)
                break
            elif len(str(pan_num)) > 9:
                break
    return max(answer)


def main():
    from timeit import timeit
    print(timeit(setup="from __main__ import pandigital_multiples", stmt="print(pandigital_multiples())", number=1))


if __name__ == '__main__':
    main()
