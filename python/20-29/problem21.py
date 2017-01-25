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


# Returns a set of all the amicable numbers up to 'max'
def amicable_numbers(max):
    answer = set()
    def d(n):
        return sum(divisors(n))

    for a in range(2, max):
        b = d(a)
        if d(b) == a and a != b:
            answer.add(a)
            answer.add(b)
    return answer


print(sum(amicable_numbers(10000)))
