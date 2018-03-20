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

function echo_SIM(){
let echo = "ESMAD"
let count = 0
let times = prompt("please insert the number of times it wants to repeate in the echo")
//Note when the user puts letters insted of a number, the counter will increse at a rapid number, slowing down the browser.
// if using != in the do while conditions insted of <=
 do{
     console.log(echo)
     count++
 }while(count<=times)

}
function whole_NUMB(){
    let numbA = prompt("insert the first number")
    let numbB = prompt("insert the second number")
    let countN = 0

    if (numbA>numbB){
        countN = numbB
        console.log(countN)
        while(countN<numbA){
            countN++
            console.log(countN)
        }
        
    }
    else if(numbB>numbA){
       
        countN= numbA
        console.log(countN)
        while(countN<numbB){
            countN++
            console.log(countN)
        }
      
    }
    else if(numbA=numbB){
        console.log(numbA)
        
    }

}

function multi_TABLE(){
    let numbM = prompt("please incert the number you wish to see the multiplication table")
    for(let i=0; i < 11; i++){
        console.log(numbM*i)
    }

}

function multi3_CALC(){
    let numbA = prompt("insert the biggest number") 
    let numbb = prompt("insert the lowerst numver")
    //so for some odd reason when you do a second prompedt it wont regognise the seond number has a number but something else so
    //make sure to convert it to an intergral 
    let lown = parseInt(numbb)
    numbA+=1
    let total = 0
    for(let i= lown; i < numbA; i++){
        if(i % 3 === 0){
            total += i
        }
        
    }

    console.log(total)
   
    
    
     
}

function numb_prim(){
    let numbA =prompt("insert a number to verefy if its prime or not")
    if(numbA==1){
        console.log("not a prime number")
    }

    else if (numbA==2){
        console.log("its a prime number ")
    }

    else {
        for (let i=2; i < numbA; i++){
            if(numbA%i == 0){
                console.log("its not a prime number")
                break
            }

            if(i+1 == numbA){
                console.log("its a prime number ")
                break
            }
        }
        
    }

}

function numb_factorial(){
    let numbA = prompt("insert the number plz")
    let newA = parseInt(numbA)
    total=1
    if(newA==0){
        console.log(0)
    }
    if(newA == 1){
        console.log(1)
    }
    if(newA >1){
        newA += 1
        for(let i = 1; i < newA; i++){
            total*= i
        }
        console.log(total)

    }
   
}

function numb_perfect(){

    let x = prompt("insert the number to check if its perfect")
    let numb = parseInt(x)

    var temp = 0;
   for(var i=1;i<=numb/2;i++)
     {
         if(numb%i === 0)
          {
            temp += i;
          }
     }
   
    if(temp === numb && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
  
}


function leap_year(){
    let x = prompt("insert the year to check if its a leap year")
    let year = parseInt(x)

    if(year%4 === 0){
        if(year%100 === 0){
            if(year%400 === 0){
                console.log("its a leap year")
            }

            else{
                console.log("not a leap year")
            }

        }

        else{
            console.log("its a leap year ")
        }
    }

    else{
        console.log("not a leap year")
    }

}

function capi_kua(){
    let x = prompt("insert the number from 100 to 999")
    if(x>=100 && x<=999){
        let str = x.toString()
        firstStr= str.charAt(0)
        revStr= str.charAt(2)
        
        if(firstStr==revStr){
            console.log("its a capikua")
        }
        else{
            console.log("its not a capikua")
        }
    }
    
    else{
        console.log("invalid number, insert again")
    }
}

function guess_game(){
    let rng = Math.floor((Math.random()*100)+1);
    let count = 0

    while()
}

