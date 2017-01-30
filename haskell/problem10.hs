{-An infinite list of prime numbers.-}
prime = [x | x <- [2..], is_it_prime x]

{-Returns the multiples of a number excluding 1 and itself-}
mul :: Integral t => t -> [t]
mul n = [x | x <- [2..((n `quot` 2) + 1)], n `mod` x == 0]

{- Returns a Bool on weather 'x' is a prime number-}
is_it_prime :: Integral t => t -> Bool
is_it_prime x
       | x == 2 = True
       | mul x == [] = True
       | otherwise = False

{- Sets Maximum numbers to functions that create infinte lists. -}
set_max :: Ord a => [a] -> a -> [a]
set_max func n = takeWhile (< n) func

answer = set_max prime 2000000

-- Not yet finished
-- Far too slow