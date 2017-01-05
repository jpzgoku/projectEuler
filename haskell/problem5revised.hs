getTFList :: Integral a => a -> a -> [Bool]
getTFList x max = [x `mod` y == 0 | y <- [1..max]]

stop :: [Bool] -> [Bool]
stop x = takeWhile ( /= False) x

checkLength :: Foldable t => t a -> Int -> Bool
checkLength list num = length list  == num

smMul :: Int -> Int -> Bool
smMul x max = (checkLength (stop (getTFList x max))) max

findSmMul :: Int -> Int -> [Int]
findSmMul xs max =[x | x <- [10..xs], smMul x max]

stop2 x = takeWhile ( < 3) x

