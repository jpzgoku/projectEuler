# Finds all the proper divisors of a number.
def divisors(n):
    answer = set()
    for i in range(2, n):
        if n % i == 0:
            answer.add(i)
            answer.add(n // i)
            if n // i < i:
                break
    answer.add(1)
    return answer


def amicable_numbers(max):
    '''Returns a set of all the amicable numbers up to x'''
    answer = set()
    d = lambda n: sum(divisors(n))

    for a in range(2, max):
        b = d(a)
        if d(b) == a and a != b:
            answer.add(a)
            answer.add(b)
    return answer


if __name__ == '__main__':
    print(sum(amicable_numbers(10000)))
