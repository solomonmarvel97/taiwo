const {add, subtract, divide, multiply} = require('./math')


describe("Math.js tests", () => {
    it('should test add ', () => {
        expect(add(2,2)).toBe(4)
    } )
})