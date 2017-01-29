{- Returns the lowest multiple of 'x' starting at 'y'.-}
lowest_multiple :: Integral t => t -> t -> t
lowest_multiple x y = if x `mod` y == 0
                      then y
                      else lowest_multiple x (succ y)

{- Returns a Bool on weather 'x' is a prime number-}
is_it_prime :: Integral t => t -> Bool
is_it_prime x = if x == lowest_multiple x 2
                then True
                else False

{- Returns the highest multiple of 'x' or 1. Does not return 'x'.-}
highest_multiple :: Int -> Int
highest_multiple x = x `quot` lowest_multiple x 2

{-Finds the lowest multiple of 'x' along with the corresponding multiple.-}
multiples :: Int -> [Int]
multiples x = [lowest_multiple x 2, highest_multiple x]

{- Takes an array of integers. Leaves the prime integers alone. Divides
the non-prime numbers by thier lowest multiple higher than 1.-}
divide_non_primes :: [Int] -> [Int]
divide_non_primes (x:xs) = conc ([list_multiples x | x <- (x:xs)])

{-Returns the lowest multiples of a number unless that number is prime.
In that case it returns that number-}
list_multiples :: Int -> [Int] 
list_multiples x = if is_it_prime x 
                   then [x]
                   else multiples x

{- Concatenates nested lists into a single list.-}
conc :: [[t]] -> [t]
conc [] = []
conc (x:xs) = x ++ conc xs

{-Takes an array of Integers and divides them unitl there are nothing but
prime numbers left.-}
only_primes :: [Int] -> [Int]
only_primes li = if li == divide_non_primes li
                 then li 
                 else only_primes (divide_non_primes li)

{- Returns the prime factors of 'x'.-}
prime_factor :: Int -> [Int]
prime_factor x = only_primes (divide_non_primes (multiples x))

answer = maximum (prime_factor 600851475143)
