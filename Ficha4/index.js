


   let show =function(value){
       let myTextArea = document.querySelector("#txResults")
       myTextArea.innerHTML += value + "\n"
   }

   

   let student = {
    name: "David Silva",
    course: "POO",
    grade: 12,
    toString: function() {
        return this.name + this.course + "#" + this.grade
    }
   }



   //funçao para listarn os nomes das propriadades do objecto

   function funcA(){
       let str =""
       for(var key in student ){
           str += key
       }
       show("A-> " + str)
   }

   //funçao para listarn os nomes das propriadades do objecto, remover 'propriedades e listar
   function  funcB() {
       funcA()
       delete student.

   }