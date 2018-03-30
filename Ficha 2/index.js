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
    let strl = arStr.length 
    let biggest = arStr[1]

    for(let i=0; i<strl; i++){
        if(biggest.length<arStr[i].length){
            biggest= arStr[i]
        }
    }

    show("G-> " + biggest)
}

function string_orange(){
    let colorPick = prompt("pick a color(make sure the first leter is in capital letters)")
    let strl = arStr.length
    let count= 0

    for(let i=0; i<strl; i++){
        if(colorPick == arStr[i]){
            count++
        }
    }

    show("H-> "+ count)


}

function string_password(){
    let passNcon = ["javarules","javarules"]
    let result=0
    if(passNcon[0]==passNcon[1]){
        result=1
    }

    show("I-> "+ count)

    
}

function number_position(){
    let pos = 4
    let result = arNUmb[pos]
    show("J->"+ result)
}

function number_until(){
    let until = 9
    let numbl = arNUmb.length
    let newar = []

    for(let i = 0; i<numbl; i++){
        if(arNUmb[i]<9){
            newar.push(arNUmb[i])
        }
    }
    newar.sort()

    show("K->" + newar)


}

function number_pares(){
    let numbl = arNUmb.length
    let newar = []
    for(let i=0; i<numbl; i++){
        if(arNUmb[i]==0 || arNUmb[i]%2==0){
            newar.push(arNUmb[i])

        }
    }

    show("L->" + newar)
}

function number_plusone(){
    let numbl = arNUmb.length
    
    for(let i=0; i<numbl;i++){
        arNUmb[i]+= 1
    }
    show("M-> " + arNUmb)

}

function number_adiray(){
    let array1 = [1,0,2,3,4];
    let array2 = [3,5,6,7,8,13];
    let adiray = []
    let longest = array2.length  // SECOND array has the longest lenght, so the 6th number of the first array wil be undefined.
    //so one of the solutions for that is to put an IF condition where the undefined on that element will = to zero, 
    //or incress the number of elements by using .push(0) element so it can have the same lenght has the other array

    for(let i=0; i<longest;i++){
        if(array1[i]== undefined){
            array1[i]= 0
        }
        adiray.push(array1[i]+array2[i])
    }

    show("N-> "+ adiray)
}