
SUMMARY

Javascript is van nature een synchrone programeertaal. Dat betekent dat het een programma regel per regel leest en uitvoert. Soms kan dit nadelig zijn.. Want dit betekent dat op het moment dat ons programma een functie uitvoert die veel tijd nodig heeft om te voltooien, ons programma, webpagina bevriest. Er zou dan geen interactie meer mogelijk kunnen zijn met onze applicatie.


Asynchronous code laat het lijken alsof javascript Asynchronous is. 
```javascript

function call2(y) {
    return `${y} jij bent echt lit`;
}

const call = (x) => {
    console.log(`Hoi, ${x} dit komt van de eerste functie`)
    setTimeout(() => {
        console.log(`Hi, ${x} dit is van de eerste functie.. sorry, but better late than never :')`)
    }, 5000);
    return call2(x);
}

console.log(call(`Brian`));
```

In dit voorbeeld is te zien hoe asynchronous code werkt. We hebben twee functies call2() en call(). Binnen de call hebben we een console.log() en een setTimeout die op 5 seconden staat. De call functie returned call2().

Ons programma wordt in de volgende stappen uitgevoerd:

1: call() wordt geroepen
2: de functie schrijft de console.log() (Hoi, Brian dit komt van de eerste functie) naar de terminal
3: de functie roept de setTimeout functie aan en executeert de callback van de setTimeout over 5 seconde
4: call roept call2() aan in een return. (Wat belangrijk is om te weten is dat de functie nu is geeindigd);
5: call2() returned 'Brian jij bent echt lit'
6: 5 seconde later wordt de callback van de setTimeout geroepen 'Hi, Brian dit is van de eerste functie.. sorry, but better late than never :')'

We zien hier dat de output van de setTimeout als laatst wordt geprint in de terminal. Onze code is niet voor 5 seconde bevroren, wat je misschien wel zou verwachten van een single threaded programming language. 

Callbacks zijn handig voor het ophalen van data van externe API's bijvoorbeeld. Node.js maakt verder ook veel gebruikt van callbacks bij routing bijvoorbeeld

voorbeeld van een callback in Node:
```javascript
app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather app',
    name: 'Brian Bawuah'
  });
});
```

Callbacks maken het mogelijk om asynchronous code te schrijven. Wat belangrijk is om te weten is dat callback functions Javascript niet opeens een asynchronous programming language maakt. Javascript is nog steeds synchronous. Callbacks laten het lijken alsof Javascript asynchronous is. Deze illustratie van de Event loop laat dit goed zien. De callstack is telkens maar met een taak bezig


Promises

Promises kunnen worden vergeleken met promises in real life. Als ik iemand iets beloof dan kan ik mijn belofte nakomen of ik kan mijn belofte breken.

```javacript
let promise1 = new Promise((resolve, reject) => {

// kamer opruimen
let isSchoon = true;
if(isSchoon){
    resolve('clean')
} else{
    reject('niet clean')
}
})

promise1.then((vanResolve) => {
    console.log(`Kamer is ${vanResolve}`)
}).catch((vanReject) => {
    console.log(`Kamer is ${vanReject}`)
})
```

Hier is een simpel voorbeeldje te zien van een promise. Met de 'new' keyword kunnen we een nieuwe promise maken. Een promise heeft kent een resolve en reject. Als een promise is resolved betekent het dat de promise is voltooid. Als de promise is rejected betekent het dat de promise niet is voltooid.

Als een promise is voltooid dan kunnen we een vervolg stap maken door .then te roepen op de promise.

Als de promise is afgewezen dan kunnen we de error in een catch block vangen.