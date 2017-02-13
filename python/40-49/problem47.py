import math

def is_it_prime(n):
	half = math.ceil(n / 2) + 1
	for i in range(2, half):
		if n % i == 0:
			return False
	return True


def prime_factors(num):
    pfs = []

    def find_prime_factors(num):
        if is_it_prime(num):
            return pfs.append(num)
        for i in range(2, num):
            if num % i == 0:
                n1 = i
                n2 = num // i
                find_prime_factors(n1)
                return find_prime_factors(n2)

    find_prime_factors(num)
    return pfs


def distinct(arr):
    return True if len(arr) == len(set(arr)) else False


# If the first two values are the same then it makes combines them into an exponetial value.
def test(arr):
    if len(arr) == 1:
        return arr
    if len(arr) > 2:
        if arr[0] == arr[1] and arr[0] == arr[2]:
            return arr
    for i in range(len(arr) - 1):
        if arr[i] == arr[i + 1]:
            return arr[:i] + [str(arr[i]) + "^2"] + arr[i + 2:]
    return arr


def distinct_prime_factors(n):
    answer = []
    for i in range(1, 1000000):
        if distinct(test(prime_factors(i))):
            if len(test(prime_factors(i))) == n:
                answer.append(i)
                if len(answer) == n:
                    return answer
            else:
                answer = []
        else:
             answer = []


#print(test(prime_factors(134043)))
#print(test(prime_factors(134044)))
#print(test(prime_factors(134045)))
#print(test(prime_factors(134046)))
print(distinct_prime_factors(4))
