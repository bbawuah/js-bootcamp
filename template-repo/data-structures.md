Arrays maken het mogelijk om waardes te groeperen.

```javascript
cons arr = ['Jimmy', 'Ton', 'Teun'];
const
```

elementen uit een array kunnen worden geselecteerd door de variabel te combineren met de index van een array

```javascript
console.log(arr[0]);
```

Arrays zijn heel erg nuttig in het programmeren. Er zijn verschillende methods die je op een array kan afroepen zoals push, unshift, pop, slice, split, map, filter en reduce en nog veel meer

```javascript

arr.map((name) => `${name} vindt programmeren leuk` )
```


Objecten

Objecten hebben een beetje dezelfde functionaliteit als een array. Het groeperen van waardes. Ze kunnen alleen meer.

```javascript

const obj = {
    name: 'Jimmy',
    leeftijd: 5,
    sendMsg(){
        return `${this.name} is ${this.leeftijd} jaar oud`;          
    }
}
```

Ik wist eerst niet goed hoe ik door een object kon loopen maar dan blijkbaar met de Object.keys, values en entries

Object.keys() looped door een object en returned alle keys;

```javascript

console.log(Object.keys(obj))

```

Object.values looped door een object en returned alle values


```javascript
console.log(Object.values(obj))
```

Object.entries looped door een object en returned alle keys en value paren

```javascript
console.log(Object.entries(obj))
```

Objecten kunnen verder op verschillende manieren gemaakt worden. Ik wil het graag hebben over prototypes en inheritance

```javascript
function Human(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName,
    this.fullName = () => `${this.firstName} ${this.lastName}`
}

const person1 = new Human("Jimmy", "Neutron")
```

Hier zien we een function constructor. De function constructor kan worden gezien als een blueprint voor meerdere objecten met dezelfde properties en methods. De 'new' keyword in const person1 creeert een nieuwe instance van de function constructor met de meegegeven waardes.

Wanneer een object wordt gemaakt. Voegt de JavaScript engine een __proto__ property toe aan het project. Dit wordt ook wel dunder proto genoemd. Deze verwijst naar de prototype object van de constructor function (person1 dus in dit geval)

De dunder proto van person1 en Human.prototype zijn dus gelijk aan elkaar

```javascript
console.log(Human.prototype === person1.__proto__)
// true
```
Het prototype object is een object waar we properties en methods aan kunnen toevoegen. Hiermee kunnen 

Classes

Class inheritance: Dit kan worden vergelijk met een blueprint. Een beschrijving van het object dat gemaakt moet worden.

Instances worden gemaakt via Function constructors met de 'new' keyword zoals ik al eerder heb aangegeven. De keyword 'class' is niet nodig voor Class inheritance. Classes in JavaScript zijn namelijk niet hetzelfde als in andere programmeertalen. Achter de schermen wordt gewoon de constructor function gebruikt (zie function Human). De keyword 'class' is slechts een suikerlaag hierover heen.

```javascript
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const animal1 = new Animal('Lion', 4)
```

Waarom heeft inheritance een best slechte naam?

Door inheritance moeten developers in een vroeg stadium van een project onderlinge relaties bepalen.