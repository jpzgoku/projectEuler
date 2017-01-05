arr = [1..999]

multiplesOf :: [Int] -> [Int]
multiplesOf xs = [x | x <- xs, x `mod` 3 == 0 || x `mod` 5 == 0]

findSum :: [Int] -> Int
findSum list = sum list 

answer = findSum (multiplesOf arr)