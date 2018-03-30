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


