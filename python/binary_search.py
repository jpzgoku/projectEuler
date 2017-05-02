primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
        43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

def binary_search(arr, answer, maximum, minimum=0):
    guess = (maximum + minimum) // 2
    if arr[guess] == answer:
        return answer
    if maximum < minimum:
        return False
    if arr[guess] < answer:
        minimum = guess + 1
    elif arr[guess] > answer:
        maximum = guess - 1
    return binary_search(arr, answer, maximum, minimum)


print(binary_search(primes, 61, len(primes)))
