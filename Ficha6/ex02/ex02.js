window.onload =function(){
    start_fun()
}


function start_fun(){
    //summoning the buttons
    let btALL= document.getElementById("butt_all")
    let btCI= document.getElementById("butt_I")
    let btCII= document.getElementById("butt_II")
    let btCIII= document.getElementById("butt_III")

    //button all
    btALL.addEventListener("click",function(){
        let refInp = document.getElementsByTagName("input")
        for(let i=0; i<refInp.length; i++){
            refInp[i].style.backgroundColor = "green" 
        }

    })

    btCI.addEventListener("click", function(){
        let refCI = document.getElementsByClassName("campus1")
        for(let i=0; i<refCI.length; i++){
            refCI[i].style.backgroundColor = "green" 
        }

    })

    btCII.addEventListener("click", function(){
        let refCII = document.getElementsByClassName("campus2")
        for(let i=0; i<refCII.length; i++){
            refCII[i].style.backgroundColor = "green" 
        }

    })

    btCIII.addEventListener("click", function(){
        let refCIII = document.getElementsByClassName("campus3")
        for(let i=0; i<refCIII.length; i++){
            refCIII[i].style.backgroundColor = "green" 
        }

    })
    

}
