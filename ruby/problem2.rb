def fibonacci(n) 
	if n == 0 or n == 1
		return 1;
	else
		return fibonacci(n-1) + fibonacci(n-2)
	end
end

answer = 0
i = 0
while fibonacci(i) < 4000001
	puts "The fibonacci of " + i.to_s + " is " + fibonacci(i).to_s
	if fibonacci(i) % 2 == 0
		answer = answer + fibonacci(i)
	end
	i += 1
	puts answer
end
		