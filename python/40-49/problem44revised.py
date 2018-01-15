def problem44(n=10000000):
    p = pentagon_num()
    pen_nums = [next(p) for _ in range(n)]

    answer = []
    for k in pen_nums[1:]:
        for j in pen_nums[:pen_nums.index(k)]:

            # Check for sum in a pentagon_num
            if k + j not in pen_nums:
                continue

            # Check for diff in a pentagon_num
            if k - j not in pen_nums:
                continue

            answer.append([k,j])

    return answer


def pentagon_num():
    """Generates pentagon numbers."""
    n = 1
    while True:
        yield n * (3 * n - 1) // 2
        n += 1



if __name__ == '__main__':
    print(problem44(10000))
