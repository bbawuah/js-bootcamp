
SUMMARY:

In het begin waren er computer talen. Computer programma's werden gebouwd met binaire getallen.
Het schrijven van programma's met binaire getallen is al snel best complex. Simpele optel functies vragen best veel code.
Dit was erg error-prone.

De Computer talen die we nu kennen maken het gemakkelijker voor mensen om programma's te schrijven. Er zijn verschillende computertalen die verschillende doeleinden hebben. Javascript werd eerst om interactie en functionaliteit aan websites toe te voegen. Maar Javascript wordt nu voor veel meer dingen gebruikt voor op de server, AI and machine learning.

var, let and const

Variabelen zijn erg belangrijk binnen het programmeren. Variabelen maken het mogelijk om data vast te houden zodat we die kunnen hergebruiken.

```javascript
var name = "Brian";

function greet() {
  console.log(`Hi, ${name}`);
}

greet();
```

ES6 introduceert een nieuwe manier van het declareren van variabelen. We kunnen nu onderscheid tussen constante variabelen (const) en variabelen die van waarde kunnen veranderen (let). Dit voorkomt onnodige errors want het kan soms zijn dat de waarde van je variabel ongewenst veranderd.

Een andere toevoeging is de block scope die bij const en let komt kijken. De 'var' variabel is function scoped. Dit betekent dat je binnen een function niet altijd access hebt tot een variabel (zie voorbeeld)

```javascript
const farra = () => {
  var lol = "function scoped";

  {
    const haha = "blocked scoped";
    let hehe = "blocked scoped";
  }

  console.log(lol);
  console.log(haha);
  console.log(hehe);
};

console.log(farra());
```

ReferenceError: haha is not defined omdat deze block scoped is. De scope waarin bij console.log() wordt kent de variabelen 'haha' en 'hehe' niet omdat deze niet bestaan in de function scope.

Verder is JavaScript een programma dat weakly typed is. In de meeste programma's zien we dat naast het declareren van een variabel ook het datatype gedeclareert moet worden.

 <!-- JAVA -->

String foo = new String("hello world"); - Dit is een voorbeeld van een programma dat strongly typed is (Java) Er is geen manier voor het programma om dit op een andere manier te interpreteren.

Javascript is intelligent genoeg om te interpreteren welk datatype we gebruiken in onze variabelen. Maar dit maakt Javascript ook weakly typed

Een oplossing hiervoor is TypeScript!

let name: string = "Susan"
,
age: number = 25,
hasCode: boolean = true;
