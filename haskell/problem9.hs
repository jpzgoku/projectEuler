pythagorean_triplet :: (Ord t, Floating t, Enum t) => t -> [[t]]
pythagorean_triplet n = [[a, b, c] | a <- [1..n], b <- [1..n], c <- [1..n], a < b, b < c, a + b + c == n, a ** 2 + b ** 2 == c ** 2]

answer = pythagorean_triplet 300

-- Very slow
