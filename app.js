//Global Variable
let oneEuroIs = {
    JPY: 156.5, // japan yen
    USD: 1.07, // us dollar
    GBP: 0.87, // british pound
}

const fromDollarToYen= (dollar) =>{
    return (currency / oneEuroIs.USD) * oneEuroIs.JPY
    
}

const fromEuroToDollar = (euro) =>{
    return currency * oneEuroIs.USD
    
}

const fromYenToPound = (yen) =>{
    // 1 euro = 1.14942 pounds 1/ 0.87 = 1.14942
    // 1 euro = 156.5 yen
    return (yen / oneEuroIs.JPY) * oneEuroIs.GBP
    
}

console.log(fromYenToPound(1000))
module.exports = {
    fromDollarToYen
};