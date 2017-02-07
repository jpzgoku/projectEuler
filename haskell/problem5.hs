{-Returns a bool depending on weather 'x' is evenly divisible by every
number uo to 't'.-}
div_by :: Integral t => t -> t -> Bool
div_by x t 
   | t <= 3 = True
   | x `mod` t == 0 = div_by x (pred t)
   | otherwise = False

{- Returns the smallest number that is evenly divisible by 1 through 'n'.-}
smallest_multiple :: Int -> Int
smallest_multiple n = head ([x | x <- [10, 20..], div_by x n])

answer = smallest_multiple 20

--Too slow