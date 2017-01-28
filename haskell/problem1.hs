{- Returns all the in an array that are multiples of 3 or 5 -}
multiplesOf :: [Int] -> [Int]
multiplesOf xs = [x | x <- xs, x `mod` 3 == 0 || x `mod` 5 == 0]

answer = sum (multiplesOf [1..999])
