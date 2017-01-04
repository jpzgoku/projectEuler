fibonacci :: Integer -> Integer
fibonacci 0 = 1
fibonacci 1 = 1
fibonacci n = fibonacci (n - 1) + fibonacci (n - 2)

setMax :: Integer -> [Integer]
setMax n = takeWhile (< n) filterNums

filterNums :: [Integer]
filterNums = [fibonacci x| x <- [1..], fibonacci x `mod` 2 == 0]

arraySum :: [Integer] -> Integer
arraySum x = sum x

answer = arraySum (setMax 4000000)