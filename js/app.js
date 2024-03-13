// console.log('sono pronto')

// recuperare i km dall’input dei km
const inputKmElement = document.getElementById('km')


// recuperare l’eta dall’input dell’età
const inputAgeElement = document.getElementById('age')


// Bottone per input
const buttonElement = document.getElementById('submit') // object


//  Evento funzione per eseguire i calcoli
buttonElement.addEventListener('click', function() {
    
    //  Recupero delle informazioni km e età
    const km = parseFloat(inputKmElement.value);
    const age = parseFloat(inputAgeElement.value);
    console.log(km, age)

        // validare i dati
    // - km >0
    km > 0
    // - eta >= 0
    age >= 0
    // - km non è NaN - ! per dire non
    !isNaN(km)

    // - eta non è NaN
    !isNaN(age)

    // SE i dati sono validi
    if (
        km > 0 &&
        age >= 0 &&
        !isNaN(km) &&
        !isNaN(age)
        ) {

//  calcolare il prezzo del biglietto
    //  - calcolare il prezzo base = km x 0.21€
    const pricePerKm = 0.21
    const basePrice = km * pricePerKm
    console.log(basePrice)

    //  - calcolare lo sconto:
    let discount = 0 // number
    //  -- SE età < 18 => sconto del 20%
    if (age < 18) {
        discount = 0.2
    } else if (age > 65) {
    //  -- ALTRIMENTI SE età > 65 =>> sconto 40%
    discount = 0.4
    }

    //  -- ALTRIMENTI sconto 0%
//  - calcolare il prezzo finale = prezzo base - sconto
const price = basePrice - basePrice * discount //number
console.log(price.toFixed(2))
    

// stampare il prezzo in DIV

const priceElement = document.getElementById('finalPrice')
priceElement.innerHTML = price.toFixed(2) + ' &euro;'

}else {
    const priceElement = document.getElementById('finalPrice')
    priceElement.innerHTML = 'Dati non corretti'
}})