using System;
using System.Collections.Generic;


namespace Problem2
{
    public class Ass
    {

        public int Problem2()
        {
            int answer = 2;

            List<int> fNum = new List<int>();
            fNum.Add(1);
            fNum.Add(2);

            int i = 0;
            while (i < 4000000) 
            {
                i = fNum[fNum.Count - 1] + fNum[fNum.Count - 2];
                fNum.Add(i);
                if (i % 2 == 0)
                {
                    answer += i;
                }
            }
            return answer;
        }
    }
}