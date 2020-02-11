// console.log(typeof [].length)
// console.log(typeof [].push)
// console.log('console')
// console.log(console)


// function Dog(name,color,age,favoriteFood) {
//     this.name = name;
//     this.color = color;
//     this.age = age;
//     this.hasOwner = false;
//     this.favoriteFood = favoriteFood;
//     this.bark = function() {
//         console.log('AV AV AAAA')
//     };
//     this.eat = function(food) {
//         this.favoriteFood.forEach(
//             ff=> ff.toLowerCase() === food.toLowerCase()
//             ? console.log(`My favourite food is ${food}`)
//             : console.log('Not my favourite food')
//         )
//     }
// }

// let archi = new Dog('Archi','White',5,['Meat','fruit']);

// let thisObj = {
//     watsThis: this,
//     whatsThisMethod: function() {
//         console.log(this);
//     }
// };
// console.log(thisObj.watsThis);
// thisObj.whatsThisMethod();


// let dog = {
//     dogName: 'Murdzo',
//     dogColor: 'White',
//     age: 4
// };

// console.log(dog.dogName)
// console.log(dog.dogColor)
// console.log(dog.age)

// const { dogName, dogColor, age } = dog;
// console.log(dogName)
// console.log(dogColor)
// console.log(age)

const student = {
    name: 'jhon doe',
    age: 19,
    scores: {
        JavaScript: 74,
        Advanced: 63,
        CSharp: 85
    }
}

// function displaySummary(student) {
//     console.log('Hello' + student.name);
//     console.log('Your JavaScript score is'
//     + (student.scores.JavaScript || 0));
//     console.log('Your  Advanced score is'
//     + (student.scores.Advanced || 0));
//     console.log('Your CSharp score is'
//     + (student.scores.CSharp || 0));
// }
// displaySummary(student.name);

// function displaySummary(
//     {name, scores: {JavaScript = 0,Advanced = 0,CSharp = 0}}) {
//         console.log('Hello' + name);
//         console/log('Your JavaScript score is:' + JavaScript);
//         console.log('Your AdvancedJS score:' + Advanced);
//         console.log('Your CSharp score is:' + CSharp);
//     }

// displaySummary(student);

// const rgb = [255, 200 , 0];

// const [red, green, blue] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);


const colors = ["#FFFFFF", [255, 0 , 255], 'rgb(255,0,255)'];

const [hex, [red, green, blue]] = colors;

console.log(hex, red, green, blue);