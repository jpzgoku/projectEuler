def coin_sums(n):
    coins = [1,2,5,10,20,50,100,200]

    one = [x * coins[0] for x in range(n // 1 + 1)]
    two = [x * coins[1] for x in range(n // 2 + 1)]
    five = [x * coins[2] for x in range(n // 5 + 1)]
    ten = [x * coins[3] for x in range(n // 10 + 1)]
    twenty = [x * coins[4] for x in range(n // 20 + 1)]
    fifty = [x * coins[5] for x in range(n // 50 + 1)]
    onehundred = [x * coins[6] for x in range(n // 100 + 1)]
    twohundred = [x * coins[7] for x in range(n // 200 + 1)]

    answer = 0

    for a in twohundred:
        for b in onehundred:
            for c in fifty:
                for d in twenty:
                    for e in ten:
                        for f in five:
                            for g in two:
                                for h in one:
                                    new_val = a + b + c + d + e + f + g + h
                                    if new_val > n:
                                        break
                                    if new_val == n:
                                        answer += 1
                                        break
    return answer


if __name__ == '__main__':
    import time
    start_time = time.time()
    print(coin_sums(200))
    print('Time: ' + str(time.time() - start_time) + ' seconds')
