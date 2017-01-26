fibonacci :: Int -> Int
fibonacci 1 = 1
fibonacci 2 = 1
fibonacci n = fibonacci (n - 1) + fibonacci (n - 2)

setMax :: Int -> [Int]
setMax n = takeWhile (< n) filterNums

filterNums :: [Int]
filterNums = [fibonacci x| x <- [1..], even (fibonacci x) ]

answer = sum (setMax 4000)
