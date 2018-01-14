from math import sqrt
from pprint import pprint as pp

def integer_right_triangles(m):
    """Returns all the integer right angle triangles up to ``m``.

    Args:
        m: Max perimeter of right triangles in which to find all possible integer right triangles.

    Returns:
        A dictionary of lists filled with tuples of the possible right triangles for every possible whole number perimeter up to ``m``.
    """
    right_triangles = {}
    for b in range(1, m + 1):
        for a in range(1, b):
            c = sqrt(a ** 2 + b ** 2)
            perimeter = int(a + b + c)
            if perimeter > m:
                break
            if c.is_integer():
                c = int(c)
                if perimeter in right_triangles:
                    right_triangles[perimeter].append((a, b, c))
                else:
                    right_triangles[perimeter] = [(a, b, c)]
    return right_triangles


def max_right_triangle_solutions(dic):
    """Return the perimeter of the right triangle that has the most possible interger right triangle solutions."""

    # A list of tuples. (right triangle perimeters, number of integer solutions)
    num_solutions = [( p[0], len(p[1]) ) for p in dic.items()]

    # Transposes the ``num_solutions`` list into a list of two tuples.
    # [(right triangle perimeters), (number of integer solutions)]
    transposed = list(zip(*num_solutions))

    max_solution = max(transposed[1])
    index = transposed[1].index(max_solution)
    answer = transposed[0][index]
    return answer


def main():
    rt = integer_right_triangles(1000)
    pp(rt)
    print(max_right_triangle_solutions(rt))


if __name__ == '__main__':
    main()
