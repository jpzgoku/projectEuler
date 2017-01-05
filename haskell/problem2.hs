fibonacci :: Int -> Int
fibonacci 0 = 1
fibonacci 1 = 1
fibonacci n = fibonacci (n - 1) + fibonacci (n - 2)

setMax :: Int -> [Int]
setMax n = takeWhile (< n) filterNums

filterNums :: [Int]
filterNums = [fibonacci x| x <- [1..], fibonacci x `mod` 2 == 0]

answer = sum (setMax 4000000)