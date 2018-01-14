def circular_primes(m):
    """Returns all the circular primes under ``m``.

    Args:
        m: Max number.

    Returns:
        A list of all circular primes under ``m``.
    """
    pri = [x for x in primes(m) if no_even_digits(x)]
    return [x for x in pri if is_circular_prime(x, pri)]


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
    """Removes all obvious not circular primes from a primes() list.

    Args:
        n: Number to test.

    Returns:
        If ``n`` has a an even digit or a ``5`` and is more than 1 digit long then False. Otherwise True.
    """
    if len(str(n)) < 2:
        return True
    not_prime = ['0', '2', '4', '5', '6', '8']
    for num in not_prime:
        if num in str(n):
            return False
    return True


def is_circular_prime(n, arr):
    """Tests if a ``n`` is a circular prime.

    Args:
        n: Number to test.
        arr: List of primes. Use in conjection with ``primes()`` and ``no_even_digits``.

    Returns:
        ``True`` if ``n`` is a circular prime. ``False`` if not.
    """
    num_str = str(n)
    for digit in num_str:
        num_str = num_str[1:] + num_str[0]
        if int(num_str) not in arr:
            return False
    return True


def main():
    answer = circular_primes(1000000)
    print(answer)
    print(len(answer))


if __name__ == '__main__':
    main()
