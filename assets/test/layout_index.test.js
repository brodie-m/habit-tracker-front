/**
 * @jest-environment jsdom
 */
 const fs = require('fs');
 const path = require('path');
 const { title } = require('process');
 const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
 
 
 describe('index.html', () => {
     beforeEach(() => {
         document.documentElement.innerHTML = html.toString();
     })
     
     describe('head', () => {
         test('it has a title', () => {
             const head = document.querySelector('head')
             expect(head).toBeTruthy()
             expect(head.textContent).toContain('Habitab.com')
         })
     })

     describe('body', () => {

         describe('Particles.js', () => {
             test('Contains particle.js animation', () => {
                 const particle = document.getElementById('particles-js')
                 expect(particle).toBeTruthy()
             })
         })

         describe('Gif Logo', () => {
             test('it has a main', () => {
                 const main = document.querySelector('main')
                 expect(main).toBeTruthy()
             })
             test('it has a logo', () => {
                 const logo = document.querySelector('img')
                 expect(logo).toBeTruthy()
             })
         })

         describe('login and register buttons', () => {
             test('it has a login button', () => {
                 const login = document.getElementById('login-button')
                 expect(login).toBeTruthy()
                 expect(login.textContent).toContain('Login')
             })
             test('it has a register button', () => {
                 const register = document.getElementById('register-button')
                 expect(register).toBeTruthy()
                 expect(register.textContent).toContain('Register')
             })
         })

         describe('login and register modal', () => {
             describe('login modal', () => {
                 test('the login modal exists', () => {
                     const loginModal = document.getElementById('login-modal')
                     expect(loginModal).toBeTruthy()
                 })
                 test('login modal contains an error class to be append error messages', () => {
                     const errorAppend = document.getElementsByClassName('login-errors')
                     expect(errorAppend).toBeTruthy()
                 })

                 describe('login modal form', () => {
                     test('login modal to contain a form', () => {
                         const loginForm = document.querySelector('form')
                         expect(loginForm).toBeTruthy()
                    })
                      test('login modal form contains an input for username', () => {
                          const loginInput = document.getElementById('login-username')
                          expect(loginInput).toBeTruthy()
                      })
                      test('login modal form contains an input for password', () => {
                          const loginInput = document.getElementById('login-password')
                          expect(loginInput).toBeTruthy()
                      })
                      test('loginmodal form contains submit button', () => {
                          const loginModalSubmit = document.getElementById('login')
                          expect(loginModalSubmit).toBeTruthy()
                          expect(loginModalSubmit.textContent).toContain('Login')
                      })   
                 }) 
                 
                 describe('Register modal form', () => {
                    test('Register modal to contain a form', () => {
                        const registerForm = document.querySelector('form')
                        expect(registerForm).toBeTruthy()
                   })
                     test('Register modal form contains an input for username', () => {
                         const registerUsernameInput = document.getElementById('register-username')
                         expect(registerUsernameInput).toBeTruthy()
                     })
                     test('Register modal form contains an input for email', () => {
                        const registerEmailInput = document.getElementById('register-email')
                        expect(registerEmailInput).toBeTruthy()
                    })
                     test('Register modal form contains an input for password', () => {
                         const registerPasswordInput = document.getElementById('register-password')
                         expect(registerPasswordInput).toBeTruthy()
                     })
                     test('Register modal form contains an input for confirm password', () => {
                        const registerConfirmPasswordInput = document.getElementById('register-confirm-password')
                        expect(registerConfirmPasswordInput).toBeTruthy()
                    })
                     test('Register modal form contains submit button', () => {
                         const loginModalSubmit = document.getElementById('register')
                         expect(loginModalSubmit).toBeTruthy()
                         expect(loginModalSubmit.textContent).toContain('Register')
                     })   
                }) 
             })
         })
     })

    })