listProducts :: Num t => [t] -> [t] -> [t]
listProducts xs ys = [x * y | x <- xs, y <- ys]

palindrome :: [Int] -> [Int]
palindrome xs = [x | x <- xs, x == read (reverse ( show x))]

answer = maximum (palindrome (listProducts [100..999] [100..999]))
