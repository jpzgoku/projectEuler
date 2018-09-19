def is_prime(n):
	half = (n // 2) + 1
	for i in range(2, half):
		if n % i == 0:
			return False
	return True


def prime_factors(num):
    pfs = []

    def find_prime_factors(num):
        if is_prime(num):
            return pfs.append(num)
        for i in range(2, num):
            if num % i == 0:
                n1 = i
                n2 = num // i
                find_prime_factors(n1)
                return find_prime_factors(n2)

    find_prime_factors(num)
    return pfs


def distinct_prime_factors(dis):
    """Finds the first ``dis`` consecutive numbers to have distinct prime factors.

    Args:
        dis: The number of consecutive distinct prime factors to look for that have ``dis`` prime factors.

    Returns:
        A list of the first consecutive distinct prime factors.
    """
    answer = []
    n = 2

    while len(answer) < dis:
        pfs = exponents(prime_factors(n))
        if len(pfs) == dis == len(set(pfs)):
            answer.append((n, pfs))
        else:
            answer = []
        n += 1
    return answer


def exponents(arr):
    original = arr[:]
    counter = 0
    while counter < len(arr) - 1:
        if arr[counter] > arr[counter + 1]:
            return original
        if arr[counter] == arr[counter + 1]:
            del arr[counter + 1]
            arr[counter] *= arr[counter]
        else:
            counter += 1
    return arr


if __name__ == '__main__':
    from timeit import timeit
    print(timeit(setup="from __main__ import distinct_prime_factors", stmt="print(distinct_prime_factors(3))", number=1))
