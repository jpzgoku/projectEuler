# Returns an array of pentagonal numbers.
def pentagonal_numbers(max):
    pentagonal = lambda n: (n * ((3 * n) - 1) // 2)
    return [pentagonal(x) for x in range(1, max + 1)]


def check1(arr):
    answer = []
    for value in arr:
        for i in range(arr.index(value) + 1, len(arr)):
            if value + arr[i] in arr:
                answer.append([value, arr[i]])
    return [answer,arr]


def check2(arr):
    for value in arr[0]:
        if value[1] - value[0] in arr[1]:
            return value[1] - value[0]


if __name__ == '__main__':
    print(check2(check1(pentagonal_numbers(2500))))


# Way too slow.
