
/*

* _ _ _ _                                   
* * _ _ _
* * * _ _
* * * * _
* * * * *

        *
      * *
    * * *
  * * * *
* * * * *

*/

// for (initiaisation; conditio; inc/dec)

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }
// 

    process.stdout.write("\n");

}

/*

i   j   
1st iteration
1   1  
1   2

2nd iteration
2   1
2   2
2   3

3rd iteration
3   1
3   2
3   3
3   4

4th iteration
4   1
4   2
4   3
4   4
4   5

5th iteration
5   1
5   2
5   3
5   4
5   5
5   6


output
*
* *
* * * 
* * * *
* * * * * 

*/ 





