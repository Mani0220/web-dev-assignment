// for (let i = 5; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {

//         process.stdout.write("* ");
//     }
//     process.stdout.write("\n")
// }


/*

i   j 
5th iteration
5   1
5   2
5   3
5   4
5   5
5   6

4th iteration
4   1
4   2
4   3
4   4
4   5

3rd iteration
3   1
3   2
3   3
3   4

2nd iteration
2   1
2   2
2   3

  
1st iteration
1   1  
1   2
*/
// let i=1 - start position 
// i <= 5 - End limit
// i++ = increment 
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {

//         process.stdout.write("* ");
//     }
//     process.stdout.write("\n")
// }
// manage rows

for(let i = 1; i <= 5; i++) {

    // reverse triangle
    for(let k = 4; k >= i; k--) {
        process.stdout.write("-");
    }

    // normal triangle
    for(let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }

    // print new line
    process.stdout.write("\n");
}

/*
i   k   j
1st ietration:
1   4
1   3
1   2
1   1
1   0   1 - break condition

2nd iteration:
2   4   1
2   3
2   2
2   1   1
2       2
2       3

3rd iteration:
3   4














- - - - *
- - - * *
- - * * *
- * * * *
* * * * *









*/

