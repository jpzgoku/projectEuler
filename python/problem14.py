# Returns a list of a collatz sequence.
def collatz(n):
    sequence = [n]

    def test(n):
        if n == 1 :
            return sequence
        elif n % 2 == 0:
            n = n / 2
            sequence.append(n)
            return test(n)
        else:
            n = (3 * n) + 1
            sequence.append(n)
            return test(n)

    return test(n)


# Finds the longest output produced by 'func' up to 'max'.
def longest_output(max, func):
    num = 0
    output = []
    for i in range(1, max):
        x = func(i)
        if len(x) > len(output):
            output = x
            num = i
    return [num, output]


#print(collatz(13))
print(longest_output(1000000, collatz))
