// i divisible by 3, then print 'Fizz'
// if i divisible by 5, then print 'Buzz'
// if i divisible by both, print 'FizzBuzz'

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "fizz buzz");
    } else if (i % 3 === 0) {
        console.log(i, "fizz");
    } else if (i % 5 === 0) {
        console.log(i, "buzz");
    }
}

// i divisible by 4, then print 'Fizz'
// if i divisible by 7, then print 'Buzz'
// if i divisible by both, print 'FizzBuzz'
-