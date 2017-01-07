findWholeMultiples :: Integer -> [Integer]
findWholeMultiples y = [x | x <- [2..(y-1)], y `mod` x == 0]

findPrimeNumbers :: [Integer] -> [Integer]
findPrimeNumbers xs = [x | x <- xs, isItPrime x]

isItPrime :: Integer -> Bool
isItPrime x = testForPrime (findWholeMultiples x)

{- Inefficient. If the function finds that a number is not prime, it will still run through 
rest of the function.
Also I souldn't have to find every multiple of 600851475143
I'm using way too much computing power. -}

testForPrime :: Eq t => [t] -> Bool
testForPrime x = x == []

answer = findPrimeNumbers (findWholeMultiples 600851475143)