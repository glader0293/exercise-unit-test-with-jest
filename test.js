const {sum} = require("./app.js");

test('adds 1 + 3 to equal 4', () =>{
    let result = sum(1,3)
    expect(result).toBe(4)
})