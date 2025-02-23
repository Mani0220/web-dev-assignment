function isEvenorOdd(num){
    if (!num) {
        console.log("Please Enter Valid Number");
        return;
    }
    if(num % 2 === 0){
        console.log("Even Number");
        
    }else{
        console.log("Odd Number");
    }
}
isEvenorOdd(98);