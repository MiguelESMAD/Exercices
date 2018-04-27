//the scri+pt is a mess due to idiocy of the teacher
//insted we are just adding notes so we can tyry building a structure so we can put the code
// we are going to have two type of classes: Users and Trips
//Important NOTE: if you start seeing code repeiting alot, then start cleaning and turn the repeiting code into a function you can summon, keeping the code tidy and shorter'ish


//###########################################################################################################################
//###########################################################CLASSES BLUEPRINTS PARTS!################################################
//###########################################################################################################################






//####################################################################
// CLASS: USERS
//######################################################################################
let users =[]
let userID= 0
//there are missing parts
class User{
    constructor(name, email){}
}
//################################################################################
// CLASS: TRIP
//####################################################################################################

//start by creating a blueprint("Constructor") of the class trip, whit an array and a static function that allows you to get the last ID

let trip =[]

class Trip{
    constructor(userID){
        this._id = trip.getLastID() + 1
        this.userID = userID
    }
    // after start setting the properties of each part of the class whit "get" and "set"


    //PROPERTIES ID

    get id() {
    return  this._id }


    //this missing how to make the code for getting the getlastID

    static getLastID() {

    let lastID = 0
    if(trip.length != 0){
        lastID =trip[trip.length-1].id
    }
    return lastID
    }
}







//##############################################################################################################################
//#########################################  HTML ELEMENTS AND CATALOG START UP, ALL ON LOAD UP #############################################
//###########################################################################################################################


window.onload = function(){
    
//Html references elements

//Inject users and trip via code (baiscly pre made users for testing)(dont forget to set "push" for each trip and user set up )
// for a client all this needs to be set on comments or deleted for the client 
let user01 = new User()
let user02 = new User()
users.push(user01); users.push(user02)

let newtrip01 = new Trip()
trip.push(newtrip01)

renderAuthers()
renderCountries()
renderCatalog()

}

// Hide the Autentication options

//####################################################################################################################################################
//##################################################### USER INFORMATION , AUTENTICATION AND REGISTRAION, AND LOGINS AND OUTS #######################################
//##########################################################################################################################################################

//##### SUBMISSION OF THE AUTENTICATION######
let frmLogin = document.getElementById("frmLogin")
frmLogin.addEventListener("submit",function(){
 // .1 obtain the values of the textboxs

  // 2. analize the array in order to check if the user exists

  //3 .if exists then user autentication aproved ( point 3 and 4 are an "if" and "else" methods) (make sure to close modal and change the navbar)

  //4. if not then show an "alert" and user autentication not aproved 
    
})
 


//this will let you close the modal when ever you click outside the modal ( i think)
window.onclick = function(event) {
    if (event.target == frmRegister) {
        frmRegister.style.display = "none";
    }
}

//####### SUBMISSION OF THE REGISTRATION ################
let frmRegister = document.getElementById("frmRegis")
frmRegister.addEventListener("submit",function(){
    //1. Validate if the passwords inserted are correct/equal

    //2. validate if the user and email already exist on the platform, if so the new user has to use a another email and/or username

    //3. Create the user

    //4. add to the user array ( use push. on the array)

    //5. add a success alert if the validation of the registration is correct

    //6. close modal

    //7. Change the navbar ( we want the user name, and saying hi to the user)

})


//############  LOGOUT  ############

// Add a lister to the logout option (user id set to 0 ,and set some of the options to "block" or "none"  to some)





//#############################################################################################################################################################
//########################################################## TRIPS REGISTRAIONS, TRIP SEARCH FUNTIONS, AND TRIP CATALOG FUNTIONS##############################################
//############################################################################################################################################################

//################## TRIP SUBMITION ########################
// get elements from the id from from the trip registraion form
// add an lister to it, and inside of it:

//1. Obtain the values from the modal form "Adding Trip"

//2. create a new object on trips

//3. after, added to the array

//4. close the modal after submitting

//5. and finally render the catalog
renderCatalog(userID)

event.preventDefault()




//############### Submit Trip Search ###############################
// get elements by id from the search, and add a lister whit the following insied of it:

//1. Search for the selected Values (get element by ID)

//2. render the Catalog for those values



//#################################### Funtion that will insert data to the tripcatalog######################

function renderCatalog(userID = 0, countryID= 0){

    //1. insert the data of the trips' array

    //2 each stip will have its on card and will will compose the html data in to them trhou8gh cicles (using a "for" cicle method)
    // make sure to do a card base on the html so you can copy and paste here
    let strHtmlCard =""
    for(var i = 0; i< trips.lenght; i++){
        //this will make sure it has a max of 3 cards in each line
        //this will create a line
        if( i % 3== 0){
            strHtmlCard += '<div class="row">'
        }

        //Create the trip card




        //close the lines
        if( i % 3== 2){
            strHtmlCard += '</div>'
        }
    }

    //add all of the Remove buttons (no clue what that does)


    // for each button , add a listener to it set whit a "click", and by clicking , a specific card, it will remove from the array


}


//##### Remove a trip based on its ID###################

//################ Add the render of the combo-boxes of Authors and Countries  of the search functions #############################

// COMBO-BOX ARTHUR (aka User that submited the trip card)

//1. read/analize the array trip
   //2. Save all non-duplicate Users
//3. create an HTML option to all the users found
   //3.1 save a name of the arthurs (users) in the user array





//COMBO-BOX COUNTRIES (same has above but whit countries)
