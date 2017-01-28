{- Adds that last two values of a list together -}
add_last2 :: Num a => [a] -> a
add_last2 arr = last arr + last (init arr)

{- Takes an array and adds the last to values of the
array together then appends that value to the end of the
array. -}
list_app :: Num a => [a] -> [a]
list_app li = li ++ [add_last2 li]

{- Returns a list fibonacci numbers up to 'max'.
Must start with the x value = [1,1] -}
fibonacci_max :: (Ord a, Num a) => [a] -> a -> [a]
fibonacci_max x max = if last x < max
                      then fibonacci_max (list_app x) max
                      else init x

{- Removes odd numbers from a list. -}
only_evens :: Integral t => [t] -> [t]
only_evens arr = [x | x <- arr, even x]

answer = sum(only_evens(fibonacci_max [1,1] 4000000))