const obj = {
  name: "Oscar",
  age: 32,
  country: "MX",
};

// Sacar item(s) del obj principal y guardarlo en un nuevo Objeto (...all)
let { age, country, ...all } = obj;
// console.log(all);

// let n = Object.entries(all);
// console.log(n);
// console.log(n[0][1]);

// Unir un Objeto a otro || Modificar el original sin afectarlo (Creando uno Nuevo)

const obj2 = {
  name: "Oscar",
  age: 32,
};
const obj3 = {
  ...obj2,
  country: "MX",
};

//

const prom = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Holi") : reject(new Error("F"));
  });
};

prom()
  .then((response) => console.log(response))
  .catch((errors) => console.log(errors))
  // Mostrar algo al finalizar el proceso con exito
  .finally(() => console.log("Finalizo"));
