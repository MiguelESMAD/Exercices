//the scri+pt is a mess due to idiocy of the teacher
//insted we are just adding notes so we can tyry building a structure so we can put the code
// we are going to have two type of classes: Users and Trips
//Important NOTE: if you start seeing code repeiting alot, then start cleaning and turn the repeiting code into a function you can summon, keeping the code tidy and shorter'ish


//####################################################################
// CLASS: USERS
//######################################################################################
let users =[]
class User{}
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
}
// after start setting the properties of each part of the class whit "get" and "set"

//this missing how to make the code for getting the getlastID
static getLastID() {

    let lastID = 0

}


window.onload = function(){
    let frmRegister = document.getElementById("frmRegis")
//Html references elements

//Inject users and trip via code (baiscly pre made users for testing)(dont forget to set "push" for each trip and user set up )
let user01 = new User()
let user02 = new User()
users.push(user01); user.push(user02)

let newtrip01 = new Trip()


// Hide the Autentication options

//  SUBMISSION OF THE
 AUTENTICATION

  // .1 obtain the values of the textboxs

  // 2. analize the array in order to check if the user exists

  //3 .if exists then user autentication aproved ( point 3 and 4 are an "if" and "else" methods) (make sure to close modal and change the navbar)

  //4. if not then show an "alert" and user autentication not aproved 
    
}

//this will let you close the modal when ever you click outside the modal ( i think)
window.onclick = function(event) {
    if (event.target == frmRegister) {
        frmRegister.style.display = "none";
    }
}


