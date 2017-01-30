pythagorean_triplet :: Integer -> [[Integer]]
pythagorean_triplet n = [[a, b, c] | a <- [1..n], b <- [1..n], c <- [1..n], a < b, b < c, a + b + c == n, a ^ 2 + b ^ 2 == c ^ 2]

answer = product (head (take 1 (pythagorean_triplet 1000)))

-- Very slow