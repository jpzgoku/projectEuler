getTFList :: Integral a => a -> a -> [Bool]
getTFList x max = [x `mod` y == 0 | y <- [1..max]]

stop :: [Bool] -> [Bool]
stop x = takeWhile ( /= False) x

checkLength :: Foldable t => t a -> Int -> Bool
checkLength list num = length list == num

findSmMul :: Int -> Int -> [Int]
findSmMul xs max =[x | x <- [10..xs], checkLength (stop (getTFList x max)) max]

stop2 x = takeWhile ( < 3) x

