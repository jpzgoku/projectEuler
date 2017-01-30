{-An infinite list of prime numbers.-}
prime = [x | x <- [2..], is_it_prime x]

{-Finds the nth spont in a list.-}
nth :: Int -> [a] -> a
nth n arr = last (take n arr)

{-Returns the multiples of a number excluding 1 and itself-}
mul :: Integral t => t -> [t]
mul n = [x | x <- [2..((n `quot` 2) + 1)], n `mod` x == 0]

{- Returns a Bool on weather 'x' is a prime number-}
is_it_prime :: Integral t => t -> Bool
is_it_prime x
       | x == 2 = True
       | mul x == [] = True
       | otherwise = False

answer = nth 10001 prime

--Far too slow. Need to make a sieve