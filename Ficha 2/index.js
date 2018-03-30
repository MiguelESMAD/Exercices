//-------------------------
// solution help here: https://github.com/rqueiros/OOP_TSIW/tree/master/Ficha02

// this part is for the my textarea so that it shows the results 

let show = function(value) {
    let myTextArea = document.querySelector("#txtResults")
myTextArea.innerHTML += value + "\n"
}




///---------------
let arNUmb = [7, 3, 6, 12, 5];
let arStr = ["Vermelho", "Verde", "Branco", "Preto"];

function number_average() {
    let numbl= arNUmb.length 
    let soma=0
    for(let i=0; i<numbl; i++){
        soma+= arNUmb[i]

    }
    let result= soma/numbl

    show("A-> " + result)

    console.log(soma)
    console.log(result)

    //putting console logs help you know if the variables you incert are doing there job

}

function number_lowest(){
    let numbl= arNUmb.length
    let lowest = arNUmb[0]

    for(let i=0; i<numbl; i++){
        if(lowest>arNUmb[i]){
            lowest=arNUmb[i]
            console.log(lowest)
        }
    }

    show("B-> "+ lowest)

}

function number_remove(){
    let numbl = arNUmb.length
    let Nnumb = 12
    let NewArray =[]
    

    for(let i= 0; i<numbl; i++){
        if(arNUmb[i] != Nnumb){
            NewArray.push(arNUmb[i])
        }

    }

    show("C-> "+ NewArray)
}


//this next one i got confused on what was asking, but turns out its just make a new string whit the numbers of the arNumb
function number_string(){

    let newStr = ""
    let numbl = arNUmb.length

    for(let i = 0; i <numbl; i++) {
        newStr += arNUmb[i]
    }
    console.log(newStr)
    show("D-> " + newStr)
}

function string_ordered(){
    let colors = arStr.sort()
    show("E-> " + colors)

}

function string_unsorted(){
    let colors = arStr.sort().reverse()
    show("F-> " + colors)
}

function string_biggest(){
    let strl = arStr.length //number of elements on the array
    let biggest = arStr[1]

    for(let i=0; i<strl; i++){
        if(biggest.length<arStr[i].length){
            biggest= arStr[i]
        }
    }

    show("G-> " + biggest)
}
