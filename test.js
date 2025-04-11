const {oneEuroIs,fromDollarToYen,fromEuroToDollar,fromYenToPound,} = require("./app.js");

test('1 dollar should be equal to 156.5', () =>{
    let result1 = fromDollarToYen(1)
    expect(result1).toBe(146.26)
})

test('1 euro should be equal to 1.07', () =>{
    let result2 = fromEuroToDollar(1)
    expect(result2).toBe(1.07)
})

test('1000 yen should be equal to aproximately 5.55 GBP', () =>{
    let result3 = fromYenToPound(1000)
    expect(result3).toBe(5.56)
})