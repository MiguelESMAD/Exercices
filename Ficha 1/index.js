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