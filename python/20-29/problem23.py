# Finds all the multiples of a number.
def multiples(n):
    answer = []
    for i in range(2, n):
        if n % i == 0:
            answer.append(i)
            answer.append(n // i)
            if n // i < i:
                break
    if len(answer) > 1:
        answer.pop()
    answer.append(1)
    return set(answer)


# Returns a list of abundant numbers up to max
def abundant_numbers(max):
    return [x for x in range(1, max + 1) if x < sum(multiples(x))]


def non_abundant_sums(n):
    a = abundant_numbers(n)
    sieve = [True] * (n + 1)
    for i in a:
        for j in a:
            k = i + j
            if k > n:
                continue
            sieve[k] = False
    v = [x for x in range(len(sieve)) if sieve[x]]
    return sum(v)


if __name__ == '__main__':
    print(non_abundant_sums(28123))
