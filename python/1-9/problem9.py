import math


def special_pythagorean_triplet(num):
    for a in range(1, num):
        for b in range(a, num):
            c_sum = a**2 + b**2
            c = math.sqrt(c_sum)
            if not c.is_integer():
                continue
            if a + b + c == num:
                return a * b * c


if __name__ == '__main__':
    import time
    start_time = time.time()
    print(special_pythagorean_triplet(1000))
    print('Time: ' + str(time.time() - start_time) + ' seconds')
