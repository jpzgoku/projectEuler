{- Returns the lowest multiple of 'x'.-}
lowest_multiple :: Integral a => a -> a
lowest_multiple n = head (take 1 [x | x <- [2..n], n `mod` x == 0])

{- Returns a Bool on weather 'x' is a prime number-}
is_it_prime :: Integral t => t -> Bool
is_it_prime x = if x == lowest_multiple x
                then True
                else False

{-Returns the lowest multiples of a 'x' along with the corresponding multiple,
unless that number is prime. In that case it returns 'x'.-}
pair_multiples :: Int -> [Int]
pair_multiples x
      | is_it_prime x = [x]
      | otherwise = [lowest_multiple x, highest_multiple x]
      where highest_multiple x = x `quot` lowest_multiple x

{- Concatenates nested lists into a single list.-}
conc :: [[t]] -> [t]
conc [] = []
conc (x:xs) = x ++ conc xs

{- Returns the prime factors of 'x'.-}
prime_factor :: Int -> [Int]
prime_factor x
    | is_it_prime x = [x]
    | otherwise = only_primes (pair_multiples x)
    where only_primes n
              | n == divide_non_primes n = n
              | otherwise = only_primes (divide_non_primes n)
              where divide_non_primes n = conc ([pair_multiples x | x <- n])


answer = maximum (prime_factor 600851475143)
