// let btn=document.querySelector("#jsBtn");
// btn.onclick=()=>{
//     console.log("button was clicked which is handled throw js");
//     let a=25;
//     console.log(a);
//     a++;
// }
// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("you are inside div");
// }


//          Event object
// let btn=document.querySelector("#jsBtn");
// btn.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX , evt.clientY);
//     console.log("button was clicked which is handled throw js");
// }
// let div=document.querySelector("div");
// div.onmouseover=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX , evt.clientY);
//     console.log("you are inside div");
// }


//         Event Listeners
// let btn=document.querySelector("#jsBtn");
// btn.addEventListener("click" , (evt) =>{
//     // console.log(evt);
//     // console.log(evt.type);
//     // console.log(evt.target);
//     console.log("Button was clicked in js");
// })
// btn.addEventListener("click" , () =>{
//     console.log("Two functions run at same time in event listener");
// })
// const handler=  () =>{                           // function stored in constant  
//     console.log("Three functions run at same time in event listener");
// }
// btn.addEventListener("click" , handler)          //we can also pass funtion like this
// btn.addEventListener("click" , () =>{
//     console.log("Four functions run at same time in event listener");
// })
// //  remove listener   (the callback referance should be same to remove)
// btn.removeEventListener("click" , handler);


/***********       practice question     ***************/
let modeBtn=document.querySelector("button");
let currMode="Light";
alert("You are trying to change mode");
modeBtn.addEventListener("click" , ()=>{
    if (currMode==="Light") {
        currMode="Dark";
    //    document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").classList.add("dark");      //we can also do this using css classes      
        document.querySelector("body").classList.remove("light");
} else {
        currMode="Light";
    //    document.querySelector("body").style.backgroundColor="skyblue";
    document.querySelector("body").classList.add("light");        //we can also do this using css classes
    document.querySelector("body").classList.remove("dark");    
    }
    console.log(`My current mode is ${currMode}`);
})