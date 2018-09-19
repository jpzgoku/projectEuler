def is_it_prime(n):
    half = (n // 2) + 1
    for i in range(2, half):
        if n % i == 0:
            return False
    return True


def prime_factors(num):
    pfs = []

    def find_prime_factors(num):
        if is_it_prime(num):
            return pfs.append(num)
        for i in range(2, num):
            if num % i == 0:
                n1 = i
                n2 = num // i
                find_prime_factors(n1)
                return find_prime_factors(n2)

    find_prime_factors(num)
    return pfs


def main():
    pf = prime_factors(600851475143)
    print(pf)
    print(max(pf))


if __name__ == '__main__':
    main()
