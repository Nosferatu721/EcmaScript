function newFunction(name, age, country) {
  var name = name || "Elkin";
  var age = age || 19;
  var name = country || "CO";
  console.log(name, age, country);
}

// ESC6

function newFunction2(name = "Elkin", age = 19, country = "CO") {
  console.log(name, age, country);
}

// Objetos

let person = {
  name: "Elkin",
  age: 19,
  gender: "Male",
};

let { name, age, gender } = person;
// console.log(person);
// console.log(name, age, gender);

let name2 = "Kilian";
let age2 = 16;
// Asignar a un Objeto
// Antes
obj = { name2: name2, age2: age2 };
// Ahora
obj2 = { name2, age2 };
// console.log(obj2);

// Arrays

let kilian = ["Kilian", "Hernan"];
let nestor = ["Nestor", "German"];

let f = ["Elkin", ...kilian, ...nestor, "Ana"];
// console.log(f);

// Funciones

const names = [
  {
    name: "Ana",
    age: 50,
  },
  {
    name: "Nestor",
    age: 43,
  },
];

let listOfNames = names.map(function (list) {
  console.log(list.name);
});

// let listOfAge = names.map((list) => console.log(list.age));
let listOfAge = names.map((list) => list.age);

console.log(listOfAge);
