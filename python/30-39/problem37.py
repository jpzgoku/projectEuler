def truncatable_primes(n=1000000):
    """Produces a list of truncatable primes.

    Args:
        n: Max number to search for truncatable primes.

    Returns:
        A list of truncatable primes up to ``n``.
    """
    pri = [x for x in primes(n) if no_even_digits(x)]
    answer = []

    for p in pri:
        if is_truncatable_prime(p, pri):
            answer.append(p)

    # Excludes the single digit primes that are not considered truncatable primes.
    return [x for x in answer if len(str(x)) > 1]


def is_truncatable_prime(n, arr):
    """Tests if ``n`` is a truncatable prime.

    Args:
        n: Number to be tested.
        arr: The list of primes to test if ``n`` is a prime. Meant to be used in conjection with ``primes()`` and ``no_even_digits``.

    Returns:
        True if ``n`` is a truncatable prime. Otherwise False.
    """
    num_str = str(n)
    right_to_left = str(n)
    left_to_right = str(n)

    # Test right to left and left to right
    while len(right_to_left) > 1:
        right_to_left = right_to_left[:-1]
        left_to_right = left_to_right[1:]
        if int(right_to_left) not in arr or int(left_to_right) not in arr:
            return False
    return True


def primes(n):
    """Sieve of Eratosthenes

    Args:
        n: Max number to search for primes.

    Returns:
        A list of primes under ``n``.
    """
    ps, sieve = [], [True] * (n + 1)
    for p in range(2, n + 1):
        if sieve[p]:
           ps.append(p)
           for i in range(p * p, n + 1, p):
               sieve[i] = False
    return ps


def no_even_digits(n):
    """Removes all obvious not truncatable primes from a primes() list that are at least 3 digits long.

    Args:
        n: Number to test.

    Returns:
        If ``n`` is two digits long or less then True.
        If ``n`` has a an even digit or a ``5`` then False.
        Otherwise True.
    """
    if len(str(n)) <= 2:
        return True
    not_prime = ['0', '2', '4', '5', '6', '8']
    for num in not_prime:
        if num in str(n):
            return False
    return True


if __name__ == '__main__':
    print(sum(truncatable_primes()))
