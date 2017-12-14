# sieve of eratosthenes
def primes(n):
    ps, sieve = [], [True] * (n + 1)
    for p in range(2, n + 1):
        if sieve[p]:
            ps.append(p)
            for i in range(p * p, n + 1, p):
                sieve[i] = False
    return ps


# Turn a number into a list of digits.
def int_to_list(n):
    return [int(x) for x in str(n)]


# Returns all the pandigital primes up to 'max'.
def pandigital_primes(max):

    # Returns a bool on weather a number has zeros in it or not.
    def no_zeros(arr):
        for i in arr:
            if i == 0:
                return False
        return True

    # Removes all the values that have '0's from 'arr'.
    def zero_filter(arr):
        return [x for x in arr if no_zeros(int_to_list(x))]

    # Returns a bool on weather 'v' is a pandigital number.
    def pandigital_check(v):
        counter = 1
        for d in int_to_list(v):
            if counter not in int_to_list(v):
                return False
            counter += 1
        return True

    return [x for x in zero_filter(primes(max)) if pandigital_check(x)]


if __name__ == '__main__':
    print(max(pandigital_primes(10000000)))
