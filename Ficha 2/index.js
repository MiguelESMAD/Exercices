//-------------------------
// solution help here: https://github.com/rqueiros/MyRep


let show = function(value) {
    let myTextArea = document.querySelector("#txtResults")
myTextArea.innerHTML += value + "\n"




///---------------
let arNUmb = [7, 3, 6, 12, 5];
let arStr = ["Vermelho", "Verde", "Branco", "Preto"];

function number_average(arNUmb) {
    let total1=0
    let numbs = arNUmb
    for(let i=0; i < 4; i++){
        total1+= numbs[i]
    }
    let totalFinal= total1/5

}