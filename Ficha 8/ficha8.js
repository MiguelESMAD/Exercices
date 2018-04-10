// the code is imcomplete sence its missing more parts of the forum like nationality, photo, work etc
//Defines a class that represents a Personality
class Person{

    //define a constroctor that will create an objectn (a blueprint per say)
    constructor(name, year,){
        this.name=name
        this.year=year
        

    }

    //this is an example for each part
    //property name
    get name(){
        return this._name
    }

    set name(newName){
        this._name = newName
    }

    //property year

    get year(){
        return this._year
    }

    set year(newYear){
        this._year = newYear
    }
}

//create an array to store the personality objects
let Persons = []

window.onload =function () {

    //assingiin a the current year

    let maxYearOfBirth = document.getElementById("inputYear")
    let currenYear = new Date().getFullYear()
    maxYearOfBirth.setAttribute("max",currenYear)

    // add listener to the form

    let frmPerson = document.getElementById("fomrPerson")
    frmPerson.addEventListener("submit",function(event){
        
        console.log("TESTChecker")

        //1-get the form values
        //NOTE( make sure that the ids are correct)(DOnt use .nodevalue, it will give you null values, so use .value even if it doesnt sudjest or apper)
        let name = document.getElementById("inputName").value
        let year = document.getElementById("inputYear").value
        
        
        //2-create an object based on those values
        let newPerson = new Person(name,year)

        //3-add the objet to an array
        Persons.push(newPerson)

        //4-Render the table whit all the objects created
        renderTable()

                //this helps testing if its working and getting the code
        for(var i = 0; i < Persons.length; i++){
            console.log(Persons[i].name)

        }

        //prevent from the form from being submitted
        event.preventDefault()
    })


    function renderTable(){
        let tblPerson = document.getElementById("Persontable")

        let strHtml=""
        // your gonna insert the table parts here (your gonna have to check the solutions for this)
        strHtml = "<thead><tr><th>#</th>" + "<th>Nam</th>" + "<th>Year</th>"+ "</tr>" + "</thead>"

        for (var i =0; i< Persons.length; i++){
            strHtml += "<tr" +
           "<th>" + (i+1) + "</th>" +
           "<td>" + persons[i].name + "</td>" +
           "<td>" + persons[i].year + "</td>" +
           "</tr"
        }
        strHtml+="</tbody>"

    tblPerson.innerHTML=strHtml


        
    }


}