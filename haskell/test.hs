{-Returns a bool debending on weather 'x' is evenly divisible by every
number uo to 't'.-}
div_by :: Integral t => t -> t -> Bool
div_by x t 
   | t <= 1 = True
   | x `mod` t == 0 = div_by x (pred t)
   | otherwise = False

test n = [x | x <- [1..], div_by x n]

{- Sets Maximum numbers to functions that create infinte lists. -}
set_max :: Ord a => [a] -> a -> [a]
set_max func n = takeWhile (> n) func

answer = set_max (test 20) 1