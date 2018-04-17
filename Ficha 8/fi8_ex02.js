//define the class for the Games and the array
let games =[]
let gameId = 0

class Game{

//setting up the constructor blueprints
    constructor(title, genres, platforms, cover){
        this._id = game.getLastId() + 1
        this.title=title
        this.genres=genres
        this.platforms=platforms
        this.cover=cover
    }


    //set upts of the properties

    //property of the id

    get id(){
        return this._id
    }

    //property tittle

    get title(){
        return this._title
    }

    set title(newtitle){
        this._title= newtitle

    }

    //property genres
    get genres(){
        return this._genres
    }

    set genres(newgenres){
        this._genres= newgenres
    }

    //property platforms
    get platforms(){
        return this._platforms
    }

    set platforms(newplatforms){
        this._platforms= newplatforms
    }

    //property cover
    get cover(){
        return this._cover
    }

    set cover(newcover){
        this._cover= newcover
    }

    //getting the last id (static method of Game)(trough the list of games recorded on the array, we are getting the last id of the last game)
    static getLastId(){
        let lastId =0
        if (games.length > 0) {
            lastId = games[games.length-1].id
        }
        return lastId
    }

}


window.onload = startUP()

function startUP(){

// object form
let frmGame = document.getElementById("gameForm")


    // 1-get the values from the submited form for the game
    let title = document.getElementById("inputTittle").value
    let genres = document.getElementById("inputGenres").value
    let cover = document.getElementById("inputCover").value

    //1.2-modalparts
    
    //1.3-table parts and buttons
    let tblgame = document


   // add a listern to the forim so you it can chekc and validate the form (theres alot missing )
   frmGame.addEventListener("submit",function(event){})}
   

   // add listener to RemoveAll button
   btnRemoveAll.addEventListener("click",function(){
       games = []
       renderTable()
       tblGames.innerHtml =""
   })

   //add listener to Filter button
   btnFilter.addEventListener("click",function(){
       let genre = document.getElementById("inputGenres").value
       renderTable()
   })

   //funtion to render the game objects in to the table