{-Returns a bool debending on weather 'x' is evenly divisible by every
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

{-Idea: 
In order to find a number that is divisible by every digit from 1 to 11, you would first run
into a number that was divisible by every digit from 1 to 10, and before that a number divisible
by every digit 1 through 9. I could start to look for 1-11 starting at the answer for 1-10, which is
2520. Progressively step up for each number.-}
 --Shit didn't work. Got stuck at 17. Still too slow.
 {-This is actually slower probably because there are multiple functions that the computer has
 to go through to figure out wether it is divisible by all the numbers or not.-}

{- Returns a list of the numbers that are evenly divisible by every number from 1 to 'n'.
The 's' in the argument in which the list comprehension starts at.-}
find_next :: Int -> Int -> [Int]
find_next s n = [x | x <- [s, s + 10..], all_multiples x [1..n]]

{- Returns a bool on weather 'n' is evenly divisible by every number in 'arr'.-}
all_multiples :: Int -> [Int] -> Bool
all_multiples n arr = if length (divisors n arr) == last arr
              then True
              else False

{- Test 'n' to see what numbers are evenly divisible in the 'arr' list. Returns a list
of what numbers are evenly divisible.-}
divisors :: Int -> [Int] -> [Int]
divisors n arr = [x | x <- arr, n `mod` x == 0]