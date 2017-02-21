def number_spiral_diagonals(n):
	start = 3
	p = 2
	answer = [1]

	def test(n, start, p):
		r = n * n
		count = 0
		for i in range(start, r + 1, p):
			answer.append(i)
			count += 1
			if count == 4:
				p += 2
				start = i + p
				return test(n, start, p)
		return answer

	return test(n, start, p)


print(sum(number_spiral_diagonals(1001)))
