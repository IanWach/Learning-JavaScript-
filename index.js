// Import stylesheets

// Write Javascript code!

/*var print = 'Print Something on a screen';

console.log(print);

let bon;
bon = "bonvie"
console.log(bon)
*/

// Decalartions ==> Let, Var, Const
// Data Types ==> String, Int, Boolean, BigInt,

/*var cookie = true
console.log(typeof cookie)
*/

//OPERATIONS ON NUMBERS

//*,/,+,-,%

/*console.log(2%2)
document.getElementById('app').innerHTML="<b>Yes</b>"
*/

/*let intTostring = String(10);
console.log(typeof intTostring);
console.log(typeof parseInt(intTostring));
*/

//CONDITIONAL;

/*let age = '40';

if (age >= 20) {
  console.log('Get out of the House');
} else {
  console.log('Stay Indoors');
}
*/

// &&, ||, ==, !=

/*document.getElementById('app').innerHTML = 'Yesss';

function datas() {
  document.getElementById('app').style.color = 'green';
  document.getElementById('app').style.fontSize = '50px';
}

datas();

function multi(...rgs) {
  console.log(rgs);
  
}

multi(1,2,3,4,5)
*/

//Arrow function

let func = () => {
  console.log('This is a Valid Function');
};

func();
// Closures
/*function car(name) {
  console.log(name);
  return {
    getModel(model) {
      console.log(model);
    },
  };
}
car('Toyota').getModel('Great');
*/

/*
function Car(name) {
  this.name = name;
}

const toyCar = new Car('Benz');

console.log(toyCar);
*/

//Literals

//ARRAY

let list = [1, 2, 3, 4, 5, 6, 7];

console.log(list);
var pos = list[3];
console.log(pos);

let coffee = ['French Roast', 'Expresso', 'Kureg', 'Kona'];

console.log(coffee.concat('yes'));
//loops

for (let i = 0; i < coffee.length; i++) {
  console.log(coffee[i]);
}

//OBJECTS

let company_smart = {
  model: 'Worker',
  year: '2020',
  isAmazing: 'true',
  prevCeo: 'geoff, ian, wach',
  'Description Of Org': 'It is a great working place',
};

console.log(company_smart);
console.log(company_smart.year);
