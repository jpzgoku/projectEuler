findWholeMultiples :: Integer -> [Integer]
findWholeMultiples y = [x | x <- [2..(y-1)], y `mod` x == 0]

findPrimeNumbers :: [Integer] -> [Integer]
findPrimeNumbers xs = [x | x <- xs, isItPrime x]

isItPrime :: Integer -> Bool
isItPrime x = testForPrime (findWholeMultiples x)

testForPrime :: Eq t => [t] -> Bool
testForPrime x = x == []

answer = findPrimeNumbers (findWholeMultiples 600851475143)
