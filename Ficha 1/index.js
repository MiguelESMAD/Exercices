function Greatings() {
    console.log("Hello World!")
} 

function HelloName() {
     

    // Cria uma função anónima
    let f = function(name) {
        console.log(name)
    }

    // Invoca a função
    let n = "ric"  
    f(n)



}

function AreaCal() {
    let numbA = 5
    let numbB = 7
    let area = numbA*numbB
    console.log(area)
}

function Math_Calpluz(){
    let numbA = 5
    let numbB = 8
    let result = numbA+numbB
    console.log(result)  
}

function IMC_cal(){
    let height = prompt("insert your height please(meters)")
    let weight = prompt("insert your weight please (KG)")
    let finalRe = weight/(height*height)

    if(finalRe < 18.5){
        console.log("below weight, score:" + finalRe)
    }

    else if (finalRe >= 18.5 && finalRe <24.9){
        console.log("Average, score:" + finalRe)
    }
    else if (finalRe >= 24.9 && finalRe <=29.9 ){
        console.log("overweight, score:" + finalRe)
    }
    else if (finalRe >= 30 && finalRe < 34.9){
        console.log("obese lv1, score:" + finalRe)
    }
    else if (finalRe >=35 && finalRe <39.9){
        console.log("obese lv2, score:" + finalRe)
    }
    else if (finalRe >=40){
        console.log("obese lv3, DANGEROUS,  score:" + finalRe)
    }



}

