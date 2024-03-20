// create an HTML page with a button when the button is clicked ,
//  change the text of a paragraph element.

/* var btn= document.querySelector(".button1");
 var p = document.querySelector("p");
 btn.addEventListener("click", function(){
    p.textContent = "My name is Vaishnavi";
 });  */

//create a page with two images and a button. Whwn the button is clicked ,
//swap the source attribute of the images
 
/* var img1 = document.querySelector("#one");
var img2 = document.querySelector("#two");

document.querySelector(".button2")
.addEventListener("click", function(){
    var src1 = img1.src;
    var src2 = img2.src;

    img1.src =src2;
    img2.src =src1;
});  */

//create a form with input fields and a submit utton. use javascript to validate
//the form and display an error message if the input is invalid.

/* var form =document.querySelector("form");
var inputs = document.querySelectorAll('input[type="text"]');
var h4=document.querySelector("h4");

form.addEventListener("submit",function(ev){
    ev.preventDefault();
    for(var i=0; i=inputs.length; i++){
        if(inputs[i].value.trim() ===''){
            h4.textContent = "Error, some fields are blank";
            h4.style.color ="red";
            break;
        }
    }
});  */

//create an unordered list . Allow users to add and remove list items dynamically using buttons
//  var add= document.querySelector("#add");
//  var remove = document.querySelector("#remove");
//  var inp= document.querySelector("input");
//  var ul = document.querySelector("ul");

//  var li;

//  add.addEventListener("click", function(){
//     if(inp.value.trim() ===''){}
//     else{
//         li=document.createElement('li');
//         li.textContent=inp.value;
//         ul.appendChild(li);
//         inp.value=""; //this line means that submit krne ke bad input box ir se blank ho jaega
//     }
//  });
//  remove.addEventListener("click", function(){
//     ul.removeChild(li)
//  })


//Build a countdown timer that starts when a button is clicked and updates the display in real time.
// var start= document.querySelector("#start");
// var stop= document.querySelector("#stop");
// var h3= document.querySelector("h3");
 
// var interv;
// start.addEventListener("click",function(){
//     var count=0;
//     interv= setInterval(function(){
//         h3.textContent=count;
//         count++;

//     },1000);
// });
// stop.addEventListener("click",function(){
//     clearInterval(interv)
// })

//create a tabbed interface where clicking on tabs displays different content sections without page reload
//[ 1st method]

// var home=document.querySelector("#home");
// var about=document.querySelector("#about");
// var contact=document.querySelector("#contact");

//  var hometexts = document.querySelector("#hometext");
//  var abouttexts = document.querySelector("#abouttext");
//  var contecttexts = document.querySelector("#contacttext");

//  hometexts.style.display="block";
//  hometexts.style.width="50%";

//  home.addEventListener("click", function(){
//     alltextremove();
//     hometexts.style.display="block";
//     hometexts.style.width="50%";
//  })
//  about.addEventListener("click", function(){
//     alltextremove();
//     abouttexts.style.display="block";
//     abouttexts.style.width="50%";
//  })
//  contact.addEventListener("click", function(){
//     alltextremove();
//     contecttexts.style.display="block";
//     contecttexts.style.width="50%";
//  })
//  function  alltextremove() {
//     document.querySelectorAll("h3").forEach(function(h3){
//         h3.style.display="none";
//     })
//  }

 //[ 2nd method]
/*
 var divs= document.querySelectorAll(".tab");
 var texts = document.querySelectorAll("h3");

 texts[0].style.display="block";
 texts[0].style.width="50%";

 divs.forEach(function (div,index) {    //sbhi divs ke liye.....
    div.addEventListener("click",function(){
        alltextremove();
        texts[index].style.display="block";
        texts[index].style.width="50%";

    });
 });
function  alltextremove() {
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display="none";
    });
} */

//display a progress bar that updates in real time , 
//shpwing the progress of a task , download,or form submission

// var prog = document.querySelector("#progress");
// var h3 = document.querySelector("h3");

// var count=0;
//  var int =setInterval(function(){
//     if(count===100){     //jab count 100 ho jaega toh progress bar stop ho jaega
//         h3.style.opacity=1;    
//         clearInterval(int);   //clearInterval() is used to stop the setInterval() function
//     }
//     count++;
//     prog.style.width=count+'%';
// },10);

//create a search bar that displays live search results as the user type, 
//updating the results without requiring a full page reload.
/*
var inp = document.querySelector("input");
var data=[
    {name:"Vaishnavi",src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
    {name:"Ananya",src:"https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
    {name:"Riya",src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
    {name:"Devika",src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
]

var pers="";  //empty string because jb hm isme kch add krege toh vo add ho jaega kyoki ye phle se empty h isliye output me undefined nhi aega
data.forEach(function(element){  //forEach() method executes a provided function once for each array element.
    //+= is used to append(add krta h) the new data to the existing data
    pers +=`<div class="person">  
    <div class="img">
       <img src="${element.src}" alt="">
    </div>
    <h4>${element.name}</h4>
 </div>`;
})
document.querySelector(".people").innerHTML=pers; //innerHTML se hm kisi bhi element ke andar kch bhi add kr skte h mtlb ki us element ke andar jo bhi h vo replace ho jaega isliye hmne div ke andar add kiya h
inp.addEventListener("input",function(){ //yaha pr input event use kiya h jisse ki jb bhi hm kuch type kre toh uska output aega
     var matchingPers=data.filter(function(e){  //filter() method creates a new array with all elements that pass the test implemented by the provided function.
       return e.name.startsWith(inp.value)
    })
    var newUsers="";
    matchingPers.forEach(function(element){
        newUsers+=`<div class="person">  
        <div class="img">
           <img src="${element.src}" alt="">
        </div>
        <h4>${element.name}</h4>
     </div>`;
    })
    document.querySelector(".people").innerHTML=newUsers;
})*/

//buils a character counter for a textarea or input field ,
// which updates in real time as the user types and enforces a character limit. 

/*
var textarea = document.querySelector("textarea");
var counter = document.querySelector("#counter");

textarea.addEventListener("input",function(){
    counter.textContent=textarea.value.length; //counter.textContent is used to display the length of the text in textarea
    //textarea.value.length is used to count the length of the text in textarea
})
*/

//show a progress bar that updates in real time as the user scrolls the page
/* OR */
//show a progress bar which shows how much page has been scrolled..
var progress = document.querySelector("#progress");