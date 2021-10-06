const register = require('../js/register')

describe('testing for register.js', () => {
    describe('validateUsername function', () => {
        test('username validation', () => {
            const userVal = register.validateUsername('Benjamin123')
            expect(userVal.length).toEqual(0)
        })
        test('username gives error', () => {
            const userError = register.validateUsername('h!2,;')
            expect(userError.length).toBeGreaterThanOrEqual(1)
        })  
    })
    describe('validatePassword function', () => {
        test('when passwords don\'t match, error given', () => {
            const errorPassword = register.validatePassword('password', 'password2')
            expect(errorPassword.length).toBeGreaterThanOrEqual(1)
        })
        test('when password less than 6 characters, error', () => {
            const errorPassword = register.validatePassword('pass', 'pass')
            expect(errorPassword.length).toBeGreaterThanOrEqual(1)
        })
    })

})