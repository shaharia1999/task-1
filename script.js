
const button1=document.getElementById("button1")
const button2=document.getElementById("button2")
const button3=document.getElementById("button3")
const first_layout=document.querySelector(".first-layout");
const second_layout=document.querySelector(".second-layout");
const third_layout=document.querySelector(".third-layout");
button1.addEventListener('click',()=>{
      first_layout.classList.remove("remove",);
      button1.classList.add(".add_button");
      second_layout.classList.add("remove",);
      third_layout.classList.add("remove");
      button1.classList.add("addButton");
      button2.classList.remove("addButton");
      button3.classList.remove("addButton");
      button1.style.background="#606060";
      button1.style.color="white";
});
button2.addEventListener('click',()=>{
    second_layout.classList.remove("remove");
    third_layout.classList.add("remove");
    first_layout.classList.add("remove");
    button2.classList.add("addButton");
    button1.classList.remove("addButton");
    button1.classList.add("removeBUtton")
    button3.classList.remove("addButton");
    button1.style.background="#E0E0E0";
    button1.style.color="black";
   
});
button3.addEventListener('click',()=>{
    second_layout.classList.add("remove");
    third_layout.classList.remove("remove");
    first_layout.classList.add("remove");
    button3.classList.add("addButton");
    button2.classList.remove("addButton");
    button1.style.background="#E0E0E0";
    button1.style.color="black";
});


