# Returns a list of lists of all the pythagorean triplets of 'n'
def pythagorean_triplet(n):
    return [[a, b, c] for a in range(1, n) for b in range(1, n) for c in range(1, n) if a < b if b < c if a + b + c == n if a ** 2 + b ** 2 == c ** 2]


# Returns the product of a list of three integers.
def pythagorean_triplet_product(arr):
	return arr[0] * arr[1] * arr[2]


# Give a list of lists of integers. Recieve a list of products of the nested lists.
def all_products(arr):
    answer = []
    for l in arr:
        answer.append(pythagorean_triplet_product(l))
    return answer

print(all_products(pythagorean_triplet(300)))

# This version is too slow
