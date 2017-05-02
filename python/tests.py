import time, math, copy
start_time = time.time()


# https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering

# https://www.nayuki.io/page/next-lexicographical-permutation-algorithm
#
# Computes the next lexicographical permutation of the specified
# list in place, returning whether a next permutation existed.
# (Returns False when the argument is already the last possible
# permutation.)
#
def next_permutation(arr):
    # Find non-increasing suffix
    i = len(arr) - 1
    while i > 0 and arr[i - 1] >= arr[i]:
        i -= 1
    if i <= 0:
        return False

    # Find successor to pivot
    j = len(arr) - 1
    while arr[j] <= arr[i - 1]:
        j -= 1
    arr[i - 1], arr[j] = arr[j], arr[i - 1]

    # Reverse suffix
    arr[i : ] = arr[len(arr) - 1 : i - 1 : -1]
    return True


def nth_permutation(n, arr):
    for i in range(1, n):
        next_permutation(arr)
    return arr


ex = [0,1,2,3,4,5,6,7,8,9]

print(nth_permutation(1000000, ex))

print(time.time() - start_time)

# py.test --pep8 filename.py
