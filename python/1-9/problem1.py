import time
start_time = time.time()


def multiples_of(*args):
    '''Returns a closure of a function that checks for any multiples of *args'''


    def inner(n):

        multiples = []
        r = list(range(n))

        for item in args:
            multiples += filter(lambda x: x % item == 0, r)
        answer = list(set(multiples))
        answer.sort()
        return answer


    return inner


if __name__ == '__main__':
    three_and_five = multiples_of(3, 5)
    print(sum(three_and_five(1000)))
