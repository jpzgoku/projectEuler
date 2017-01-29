sum_of_the_squares :: Int -> Int
sum_of_the_squares n = sum ([x ^ 2 | x <- [1..n]])

square_of_the_sum :: Int -> Int
square_of_the_sum n = sum ([x | x <- [1..n]]) ^ 2

difference :: Int -> Int -> Int
difference n1 n2 = if n1 > n2
                   then n1 - n2
                   else n2 - n1

answer = difference (sum_of_the_squares 100) (square_of_the_sum 100)