
// const body =document.body;
// body.append("Hello World");
// //adding the tags 
// const h1tag=document.createElement("h1");

// h1tag.innerText="Hello World";
// body.append(h1tag);

// const divTag = document.createElement("div");

// divTag.innerText = " Content Inside the div";

// for(let i = 1; i<= 10; i++){(
//     console.log("The count : ",i, " HI");    
// }

// let i = 1;
// while(i<=5){ // 1 <= 5
//     console.log(i, " Value");
//     i++;
// }
// const divTag = document.createElement("div");
// body.append(divTag);

// const h1Tag = document.createElement("h1")
// h1Tag.innerText = "Hello World";
// body.append(h1tag);
// divTag.innerText = "content inside the div";
// const strong =document.createElement("strong")

// body.append(strong);

// strong.innerText = "Hai";
// strong.innerHTML = `<script></script>`


const body = document.body;

body.style.backgroundColor= "white";
function Hai(){
        const data = document.getElementById("Search").value;
        const Content = document.getElementById("Content");

            Content.innerHTML += `<h1>${data}</h1>`;
   
    }



    
        function changeTheme(){
    if(body.style.backgroundColor== "white"){
        body.style.backgroundColor='black';
        body.style.color="white";

   
}
else { 
   body.style.backgroundColor= "white";
   body.style.color = "grey";
}
}

