//define the class for the Games and the array
let games =[]

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
//property of the id ( i have no clue what id does =/)
get(id){
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

    //getting the last id
    static getLastId(){
        let lastId =0
        if (games.length > 0) {
            lastId = games[games.length-1].id
        }
    }

}


window.onload = startUP()

function startUP(){

//add a lister to the form
let frmGame = document.getElementById("gameForm")
frmGame.addEventListener("submit",function(event){

    // 1-get the values from the submited form for the game
    let title = document.getElementById("inputTittle").value
    let genres = document.getElementById("inputGenres").value
    let cover = document.getElementById("inputCover").value


//2-create a new object based on those submited values

//3- add the object to the array

//4-render in to the table

}
}
