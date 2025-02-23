function printGrade(marks){
    if(!marks) {
        console.log("please enter valid marks")
        return;
    }
    if (marks>=35 && marks<=50){
        console.log("C grade");
    }
    else if(marks>=51 && marks<=60){
        console.log("B grade");
    }
    else if (marks>=61 && marks<=70){
        console.log("A grade");
    }
    else if (marks>=71 && marks<=100){
        console.log("Distinction grade");
    } 
    else {
        console.log("fail");
    }
} 
printGrade(68);