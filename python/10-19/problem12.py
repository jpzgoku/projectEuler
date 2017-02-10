# Finds all the multiples of a number.
def multiples(n):
    answer = set()
    for i in range(1, n):
        if n % i == 0:
            answer.add(i)
            answer.add(n // i)
            if n // i < i:
                return answer
    return answer


# Finds the first value of a triangular number to have over 'n' divisors
def highly_divisible_triangular_number(n):
    previous_num = 0
    for i in range(1, 1000000000):
        previous_num = previous_num + i
        if len(multiples(previous_num)) > n:
            return previous_num


print(highly_divisible_triangular_number(500))
#print(multiples(2347492))
