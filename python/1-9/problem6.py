import math

def sum_of_squares(end):
	answer = 0
	for n in range(1, end + 1):
		answer = answer + math.pow(n, 2)
	return answer


def square_of_the_sum(end):
	answer = 0
	for n in range(1, end + 1):
		answer = answer + n
	return math.pow(answer, 2)


def difference(callback1, callback2):
	if callback1 > callback2:
		return callback1 - callback2
	return callback2 - callback1


print(difference(sum_of_squares(100), square_of_the_sum(100)))
print(difference(square_of_the_sum(100), sum_of_squares(100)))