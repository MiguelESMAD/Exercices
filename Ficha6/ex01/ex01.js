// https://github.com/rqueiros/OOP_TSIW/tree/master/Ficha06
//heres the  solutions so you can check if its righgt or if a question is too confusing


/*appenrently this is an important element, this allows it to exacute everything afte the page is load*/
// so docurments and event lisnners wont work untill they are executed so .on load will help whit that

window.onload = function js_Content(){


//we are summoning the parts from the Html by ID , that we can sue it and do modifications


let para = document.getElementById("paragraf")
let textb = document.getElementById("textbox")
let butt = document.getElementById("buttonbox")


//this will allow to change the paragraf on <p> inside the html
para.innerHTML = "Welcome to my webpage!"


//we add an evvent listener first , when add what its suppose to listen for in order to trigger, and next say what it will trigger
butt.addEventListener("click", function() {
    // sence we are dealing whit a text box, we have to think of a situation where the textbox value is eather emphty or has a value
    if(textb.value != ""){
        para.innerHTML = "Welcome " + textb.value + "!"
    }

    else {
        para.innerHTML = "Welcome stranger!"
    }
})
}




