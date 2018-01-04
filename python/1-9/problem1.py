import time
start_time = time.time()


def multiples_of(*args):
    '''Returns a closure of a function that checks for any multiples of *args'''


    def inner(n):

        multiples = set()

        for item in args:
            # multiples = multiples.union(filter(lambda x: x % item == 0, range(n)))
            multiples = multiples.union([x for x in range(n) if x % item == 0])
        return multiples


    return inner


if __name__ == '__main__':
    three_and_five = multiples_of(3, 5)
    print(sum(three_and_five(1000)))
    print('Time: ' + str(time.time() - start_time) + ' seconds')
