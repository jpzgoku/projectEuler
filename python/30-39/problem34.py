from math import factorial


def digit_factorials(n):
    """Returns a list of all digit_factorials up to ``n``.

    Args:
        n: Max number to check for digit factorials.

    Returns:
        List of digit factorials.
    """
    return [x for x in range(3, n + 1) if is_digit_factorial(x)]


def is_digit_factorial(n):
    """Checks if a numer is a digit factorial.

    Args:
        n: Number to check if it is a factorial.

    Returns:
        True if ``n`` is a digit factorial. False if not.
    """
    digit_factorial = sum([factorial(int(x)) for x in str(n)])
    return digit_factorial == n



if __name__ == '__main__':
    print(sum(digit_factorials(100000)))
