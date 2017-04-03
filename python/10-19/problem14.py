import time
start_time = time.time()


def longest_collatz_sequence(max):

    def collatz(n):
        answer = [n]
        num = n
        while not num == 1:
            if num % 2 == 0:
                num = num // 2
            else:
                num = (3 * num) + 1
            answer.append(num)
        return answer

    output = []
    for i in range(1, max):
        x = collatz(i)
        if len(x) > len(output):
            output = x
    return output[0]


print(longest_collatz_sequence(1000000))
print(time.time() - start_time)


'''
To make it faster you could somehow have the computer
remember the lenght of the sequence for every number
that it has already computed. For example if the computer
runs into 13 then it knows that the sequence will end
in 9 more numbers. So then the computer won't have to do
those nine computations. This will cut down the time when
the sequences get really long.
'''
