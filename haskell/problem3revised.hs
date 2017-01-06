{- make a function that will test if a number is prime by checking
if it is evenly divisable starting at 2 and finishing one integer
before itself. If it is then stop the function and return false. -}

halfMultiples :: (Fractional t, Enum t) => t -> [t]
halfMultiples num = [x | x <- [2..(num/2)]]

roundList :: [Float] -> [Int]
roundList xs = [ ceiling x | x <- xs]

{- I want this to return a Bool. Not a [Bool].
If it finds a singe False I want it to return False -}

isItPrime :: Integral a => a -> [a] -> [Bool]
isItPrime num list = [num `mod` x == 0| x <- list]

answer = stop (isItPrime 20 (roundList (halfMultiples 20)))

{-function isItPrime(num) {
	var saveTime = Math.ceil(num /2) + 1;
	for (var i = 2; i < saveTime; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};-}

stop :: [Bool] -> [Bool]
stop x = takeWhile ( == True) x