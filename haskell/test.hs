sieve x = [2..x]

step2 xs = [x | x <- (tail xs), x `mod` (head xs) /= 0]