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

function string_rever(){
    // first create our desied string and an emphty array
    let text = "I heared that the next frame to be primed is Limbo, but Mesa is also a good candidate. "
    let arstr = []


    //afterwards, you will need to put the strig on the away and equal and split every character ""
    //after that is complete you will reverse it using the reverse() method
    arstr = text.split("");
    arstr.reverse();

    //console.logs are usefull to have arround to check if each part is performing well and see on the console if its going has you plan

    console.log(arstr)
    console.log(typeof arstr)

    // after and finally you will use join() to turn the array in to a string, inside the join() method, is the seperator , 
    // if you have a list of items on the aray and you want to put "and" in between items you add that on the join()
    // by default, an emphty join() will put comas ',' 
    // sence in this case the array is just caracters you but '' 
    text= arstr.join('');

    console.log(text)
    console.log(typeof text)

    show("E-> " + text)
}

function char_remove(){
    let text = "Warframe in recEent years has only been growing bigger, and next tEnnoCon will be massive then other years."
    let charSEt1 = 'e' 
    let charSEt2 = 'E'
    
    /*Method 1, you can split a specific char, or string, but it will split and leave a coma behind, so in order to avoid that
    .join('') will substatute the coma for a blank
    NOte: so for seperate characters you will need to do multiple splits and joins
    */

    let textN = text.split(charSEt1).join('').split(charSEt2).join('')

    /*Method 2:
    THis methind might be more simple and efficient.
    so this is simular to exercice C, we used regexp, but whit /string/gi , insted we are doing another way,
    where we can add the var , this will be good for exercices were the user needs to type in the the thing they desire to 
    remove or search or count.

    let textN = text.replace(RegExp(charSEt,'gi'), '')

    */
    show("F-> "+ textN)
}

function time_convert(){
    let timeSec = prompt("Insert the amount of seconds you wish to convert")
    if(timeSec === null){
        timeSec = 0
    }

    //NOte: when a user leaves a prompt empty, the result will be "null", so in order to avoid null showing up, make sure to put an if condition.

    // Note :floor. will turn a number inside into a round variable, say 1.6 will be 1 
    let hours = Math.floor(timeSec / 3600);
    let minutes = Math.floor(timeSec % 3600 / 60)
    let seconds = Math.floor(timeSec % 3600 % 60)

    let result = timeSec+' = '+ hours + 'h : ' + minutes + 'm : ' + seconds +'s'
    show("G-> " + result)
}

function ceasar_shift(){
    //let msg =prompt("insert the message you wish to encrypt (leeters only please)")

    //shift alphabet array
    let alshift ="defghijklmnopqrstuvwxyzabc"
    let array2 =[]
    array2= alshift.split("");

    console.log(array2)

    //encryption code starts here

    let msgTest = "i ate a cookie"
    let arraymgs =[]
    arraymgs= msgTest.split("");
    let count = 0

    let msgcript = "";

    for(let i = 0; i<arraymgs.length ;i++){
        for(let y=0; y<array2.length ;y++ ){
            if(arraymgs[i] = array2[y]){
                msgcript+=array2[y]

            }

            
        }

        
        }
        if(arraymgs[i] == " "){
                msgcript+= " ";
                count++

            }
    }

    console.log(msgcript)
    console.log(count)


