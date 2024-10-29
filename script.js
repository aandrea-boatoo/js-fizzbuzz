"use scrict"
console.clear()


// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// *Prima di partire a scrivere codice poniamoci qualche domanda:*
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?

// OBIETTIVO
// stampare tutti i numeri da 1 a 100, con fizz al posto dei numeri divisibili per 3 e buzz ai numeri divisibili per 5

// VARIABILI
// i = numeri da uno a cento
// stamp = messaggio da stampare

for (let i = 1 ; i <= 100; i++ ) {
    let stamp = i;
if(i % 3 === 0 && i % 5 === 0){
    stamp = "FizzBuzz"
} else if(i % 3 == 0){
    stamp = "Fizz"
} else if(i % 5 == 0){
    stamp = "Buzz"
}
    
console.log(stamp);

}
