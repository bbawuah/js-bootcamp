const obj = {
  name: "Jimmy",
  leeftijd: 5,

  sendMsg() {
    return `${this.name} is ${this.leeftijd} jaar oud`;
  },
};

console.log(Object.entries(obj));

function Human(firstName, lastName) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.fullName = () => `${this.firstName} ${this.lastName}`);
}

const person1 = new Human("Jimmy", "Neutron");
console.log(person1);
console.log(Human.prototype);
console.log(Human.prototype === person1.__proto__);

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const animal1 = new Animal("Lion", 4);

console.log(animal1);

let promise1 = new Promise((resolve, reject) => {
  // kamer opruimen

  let isSchoon = true;

  if (isSchoon) {
    resolve("clean");
  } else {
    reject("niet clean");
  }
});

promise1
  .then((vanResolve) => {
    console.log(`Kamer is ${vanResolve}`);
  })
  .catch((vanReject) => {
    console.log(`Kamer is ${vanReject}`);
  });

