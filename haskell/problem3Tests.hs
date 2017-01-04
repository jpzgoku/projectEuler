--Generates a list of prime numbes up to a certain number.
primeNumbers :: Integer -> [Integer]
primeNumbers xs = [x | x <- [2..xs], testForPrime (findWholeMultiples x)]

--A function used to help the primeNumbers function decide if a number is prime or not.
testForPrime :: Eq t => [t] -> Bool
testForPrime x = x == []

--Generates a list of whole numbers y can be divided by.
findWholeMultiples :: Integer -> [Integer]
findWholeMultiples y = [x | x <- [2..(y-1)], y `mod` x == 0]

{- A failed attempt to replace '(y-1)' in findWholeMultiples so save computing power.
It failed because of an error that I don't yet understand.
The function works on its own.-}
saveTime :: (RealFrac a, Integral b) => a -> b
saveTime y = round (y / 2)

--Tests to see if a numer is a whole number.
testForWhole :: Integral a => a -> Bool
testForWhole x = (x `mod` 1) == 0

-- Creates a list of tuples of all the multiples of x.
multiplesOf :: Integer -> [(Integer, Integer)]
multiplesOf x = zip (findWholeMultiples x) (reverse (findWholeMultiples x))

{- An attempt to find the prime factors of a number. Couldn't figure out how to 
implement it. -}
firstMultipleSet :: Integer -> [Integer]
firstMultipleSet x = [head (findWholeMultiples x), last (findWholeMultiples x)]

-- Finds the prime numbers within a list.
findPrimeNumbers :: [Integer] -> [Integer]
findPrimeNumbers xs = [x | x <- xs, isItPrime x]

-- Tests if a number is prime.
isItPrime :: Integer -> Bool
isItPrime x = testForPrime (findWholeMultiples x)

answer = findPrimeNumbers (findWholeMultiples 600851475143)

