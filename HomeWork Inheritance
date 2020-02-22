function Person(firstName,lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function(){
       console.log(`${this.firstName} ${this.lastName}`)
    }
}

function Student(academyName,studentId, firstName, lastName, age){
   Object.setPrototypeOf(this,new Person(firstName,lastName,age))
   this.academyName = academyName;
   this.studentId = studentId;
   this.study = function (){
       console.log(`The student ${this.firstName} is studying in the 
       ${academyName}`);
   }
}

let studentOne = new Student("developer",10,"Viktor","Zafirovski", 37 );
let studentTwo = new Student("design",5,"Pero","Pajkovski", 37 );
console.log(studentOne);
console.log(studentTwo);
studentOne.getFullName();


Person.prototype.getAcademyName = function(){
   return this.academyName;
}

function DesignStudent(academyName,studentId, firstName, lastName, age,isStudentOfTheMonth){
   Object.setPrototypeOf(this, new Student(academyName,studentId, firstName, lastName, age))
   this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function (){
        console.log(`The student ${this.firstName} is doing an adobe exam!`);
    }
}

function CodeStudent(academyName,studentId, firstName, lastName, age,isStudentOfTheMonth,
   hasIndividualProject,hasGroupProject){
       Object.setPrototypeOf(this, new Student(academyName,studentId, firstName, lastName, age,isStudentOfTheMonth))
       this.hasIndividualProject = hasIndividualProject;
       this.hasGroupProject = hasGroupProject;
       this.doProject = function(type) {
            if(type === 'individual' ||
            type === 'group'){
                console.log(`Person ${this.firstName} ${this.lastName} is 
                working on the project ${this.academyName}`)
            }
       }
   }

   function NetworkStudent(academyName,studentId, firstName, lastName, age,isStudentOfTheMonth,
    hasIndividualProject,hasGroupProject,academyPart){
       Object.setPrototypeOf(this, new Student(academyName,studentId, firstName, lastName, age,
        isStudentOfTheMonth,hasIndividualProject,hasGroupProject))
       this.academyPart = academyPart;
       this.attendCiscoExam = function(){
           console.log(`The student ${this.firstName} is doing a cisco exam!`);
       }
   }

   let studentThree = new NetworkStudent("design",3,"Mirko","Popovski", 27, true,true,false,4 );
   let studentFour = new NetworkStudent("network",4,"Pavle","Stanoevski", 23,false,true,false,4 );
   let studentFive = new NetworkStudent("network",5,"Kostadin","Zahov", 47,true,false,true,2 );
   let studentSix = new NetworkStudent("developer",6,"Blagoja","Peevski", 31,false,false,true,1 );
   console.log(studentThree);
   console.log(studentFour);
   console.log(studentFive);
   console.log(studentSix);
   studentThree.doProject('individual');
