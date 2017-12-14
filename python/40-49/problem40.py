def irrational_decimal(max):
    answer = ''
    for i in range(1, max + 1):
        answer = answer + str(i)
    return answer


def champernowne_s_constant():
    num = irrational_decimal(200000)
    return int(num[0]) * int(num[9]) * int(num[99]) * int(num[999]) * int(num[9999]) * int(num[99999]) * int(num[999999])


if __name__ == '__main__':
    print(champernowne_s_constant())
