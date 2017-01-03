i = 0
answer = 0
while i < 1000
	if i % 3 == 0
		answer = answer + i
		puts answer
	elsif i % 3 != 0 and i % 5 == 0
		answer = answer + i
		puts answer
	end
	i += 1
end
puts answer