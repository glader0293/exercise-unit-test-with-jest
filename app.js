//Global Variable
let oneEuroIs = {
    JPY: 156.5, // japan yen
    USD: 1.07, // us dollar
    GBP: 0.87, // british pound
}

const fromDollarToYen = (dollar) =>{
    let resultfromDollarToYen = (dollar / oneEuroIs.USD) * oneEuroIs.JPY
    return parseFloat(resultfromDollarToYen.toFixed(2))
    
}

const fromEuroToDollar = (euro) =>{
    let resultfromEuroToDollar = euro * oneEuroIs.USD
    return parseFloat(resultfromEuroToDollar.toFixed(2))
    
}

const fromYenToPound = (yen) =>{
    let resultfromYenToPound = (yen / oneEuroIs.JPY) * oneEuroIs.GBP
    return parseFloat(resultfromYenToPound.toFixed(2))
    
}

console.log(fromYenToPound(1000))
module.exports = {
    oneEuroIs,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound,
};