let show = function(value) {
    let myTextArea = document.querySelector("#txtResults")
myTextArea.innerHTML += value + "\n"
}


function caracter_numb(){
    let str = "Eidolons"
    let strNumb = str.length //no. of characters a string has
    show("A-> " + strNumb)
}

function full_name(){
    let first ="Brock"
    let last="Samson"
    let fullname= first + " " + last
    show("B-> " + fullname)
}

function numb_vogals(){
    let words = "Steel Medirian"
    
    let countMatch = words.match(/[a,e,i,o,u]/gi).length;
    if(countMatch === null){
        countMatch = 0
    }
    show("C-> " + countMatch)

    /*Important NOte:

    A good method of serching for characters and words on a string (dont quite know if this also applies to arrays) 
    is to use the match() method, it will search for a match on whats inside of the method, but it will only search for the first match.
    its a regex, from what i research on the web.

    So in order to do a global search on tht string, you will have to add "g", and to make it case sensitive in order to get all lower case and 
    capital case, we add an "i" to the "g" making it "gi"

    in order to search for you have to put the word and character inside the method like that :/word/gi
    for an array of numbers and letters do this: /[a-e]/    /[1-90]/
    for seperate words and numbers make sure to put a coma "," oneach character or string you wish to match.

    if no match is found, the result will be "null", so make sure to add an if condition.
    
    var src = "azcafAJAC";  
     testing out how match method works
    var re = /[a-c]/gi;  
    var result = src.match(re);
    show("C-> " + result)*/


}

function numb_words(){
    let Dialog_Prime = "A sanguine trick.\n A murderous comedy.\n But no one is laughing anymore... except you.\n The mere vapors of your life, shimmering still. Mirage."
    let str_numb = Dialog_Prime.split(" ").length

    //the escape caracter is "\n ", dont forget the '' after the 'n' 

    console.log (Dialog_Prime)
    console.log(str_numb)
    
    show("D-> " + str_numb)

}