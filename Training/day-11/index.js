function addNumbers(a,b){
    console.group(a + b);
}
 

// // how to take objects
// let person = {
//     name : "Manisha",
//     COURSE : "WEB",
//     hello : function(){
//         console.log("Hello Everyone , I am", this.name,". Iam teachingc the", this.COURSE,"course" );

// }};
//  person.hello();

//  / let name = "Joel W";
// // function expression
// let hello : function(){
//     console.log("Hello");
// }
// hello();

class Car{
    // constructor 
    // name, brand, color, engine
    constructor(name, brand, color, engine){
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.engine = engine;
    }
    // Basic function or user-defined function you need to do.
    // values of name, color, engine, brand
    speak(){
        console.log(this.name, this.brand, this.color, this.engine);
    }
}

let porshe = new Car("Porshe 911", "Porshe", "Snow White", "V-12");
porshe.speak();