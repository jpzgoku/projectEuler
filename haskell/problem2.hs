{- Returns the finonacci using recursion -}
fibonacci :: Int -> Int
fibonacci 1 = 1
fibonacci 2 = 1
fibonacci n = fibonacci (n - 1) + fibonacci (n - 2)

{- Sets Maximum numbers to functions that create infinte lists. -}
set_max :: Ord a => [a] -> a -> [a]
set_max func n = takeWhile (< n) func

{- Infinite list comprehension meant to be used with the setMax function. -}
test :: (Num t1, Enum t1) => (t1 -> t) -> [t]
test func = [func x | x <- [1..]]

{- Removes odd numbers from a list -}
only_evens :: Integral t => [t] -> [t]
only_evens arr = [x | x <- arr, even x]

answer = sum (only_evens (set_max (test fibonacci) 4000000))

{- Still too slow. Need to figure out how to make
recursion faster or make a new fibonacci function
without using recursion. -}
