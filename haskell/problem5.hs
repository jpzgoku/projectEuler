{-Need to fix this function so that it stops doing calculations
when it reaches a False value. -}
getTFList :: Integral a => a -> a -> [Bool]
getTFList x max = [x `mod` y == 0 | y <- [1..max]]

stop :: [Bool] -> [Bool]
stop x = takeWhile ( /= False) x

hasFalse :: Integral a => a -> a -> Bool
hasFalse x max = False `elem` (getTFList x max)

getCorrectBool :: Bool -> Bool
getCorrectBool x = x /= True

smMul x max = getCorrectBool (hasFalse x max)

test2 xs max =[x | x <- [10..xs], smMul x max]