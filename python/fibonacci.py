# 'f' is the slowest, fibonacci is the fastest

# Finds the fibonacci using recursion.
def f(n):
    return 1 if n == 0 or n == 1 else fibonacci(n-1) + fibonacci(n-2)


# Finds the fibonacci without using recursion.
def fibonacci(n):
    answer = [1, 1]
    for i in range(1, n - 1):
        answer.append(answer[i] + answer[i - 1])
    return answer.pop()


# Alternate recursion function
def fi(n, arr=[1,1], counter=2):
    x = arr[-1] + arr[-2]
    arr.append(x)
    counter += 1
    if counter == n:
        return arr[-1]
    return fi(n, arr, counter)


if __name__ == '__main__':
    import time
    start_time = time.time()
    print(fibonacci(100))
    print('Time: ' + str(time.time() - start_time) + ' seconds')
