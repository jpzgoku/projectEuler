using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Problem2;

namespace _1_9
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Ass newAss = new Ass();
            // Console.WriteLine(Problem2());
        }

        public static int Problem1()
        {
            int answer = 0;
            for (int i = 0; i <= 1000; i++)
            {
                if (i % 3 == 0 || i % 5 == 0) 
                {
                    answer += i;
                }
            }
            return answer;
        }

        // public static int Problem2()
        // {
        //     int answer = 2;

        //     List<int> fNum = new List<int>();
        //     fNum.Add(1);
        //     fNum.Add(2);

        //     int i = 0;
        //     while (i < 4000000) 
        //     {
        //         i = fNum[fNum.Count - 1] + fNum[fNum.Count - 2];
        //         fNum.Add(i);
        //         if (i % 2 == 0)
        //         {
        //             answer += i;
        //         }
        //     }
        //     return answer;
        // }
    }
}
