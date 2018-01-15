def problem45(n):
    """Finds ``n`` numbers that are triangle, pentagon and hexagon numbers.

    Args:
        n: How many numbers you want.

    Returns:
        A list of numbers that are triangle, pentagon and hexagon numbers.
    """
    tr = triangle_num()
    pe = pentagon_num()
    he = hexagon_num()

    answer = []

    t = next(tr)
    p = next(pe)
    h = next(he)

    while len(answer) < n:

        if t == p == h:
            answer.append(h)
            h = next(he)

        if t < h:
            t = next(tr)

        if p < h:
            p = next(pe)

        if h < t or h < p:
            h = next(he)

    return answer


def triangle_num():
    """Generates triangle numbers."""
    n = 1
    while True:
        yield n * (n + 1) // 2
        n += 1


def pentagon_num():
    """Generates pentagon numbers."""
    n = 1
    while True:
        yield n * (3 * n - 1) // 2
        n += 1


def hexagon_num():
    """Generates hexagon numbers."""
    n = 1
    while True:
        yield n * (2 * n - 1)
        n += 1


def main(n):
    p = problem45(n)
    print(p)
    print(p[-1])


if __name__ == '__main__':
    main(3)
