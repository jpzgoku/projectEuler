arr = [1..999]

multiplesOf :: [Integer] -> [Integer]
multiplesOf xs = [x | x <- xs, x `mod` 3 == 0 || x `mod` 5 == 0]

findSum :: [Integer] -> Integer
findSum list = sum list 

answer = findSum (multiplesOf arr)