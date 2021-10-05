/**
 * @jest-environment jsdom
 */
 const fs = require('fs');
 const path = require('path');
 const html = fs.readFileSync(path.resolve(__dirname, '../../dashboard.html'), 'utf8');
 
 
 describe('index.html', () => {
     beforeEach(() => {
         document.documentElement.innerHTML = html.toString();
     })
     describe('head', () => {
         test('document has a name', () => {
             const head = document.querySelector('title')
             expect(head).toBeTruthy()
             expect(head.textContent).toContain('Habitab.com')
         })
     })

     describe('body', () => {
         describe('navBar', () => {
             test('navBar exists', () => {
                 const nav = document.querySelector('nav')
                 expect(nav).toBeTruthy()
             })
             test('navbar contains an image logo', () => {
                 const logo = document.querySelector('img')
                 expect(logo).toBeTruthy()
             })
             test('navbar contains a logout button', () => {
                 const logOut = document.querySelector('button')
                 expect(logOut).toBeTruthy()
                 expect(logOut.textContent).toContain('Logout')
             })
         })

         describe('mascot', () => {
             test('the beaver mascot exists', () => {
                 const beaver = document.getElementById('beav')
                 expect(beaver).toBeTruthy()
             })
         })

         describe('the info body', () => {
             describe('the list of habits', () => {
                 test('the list of habits container exists', () => {
                     const listContainer = document.getElementsByClassName('box')
                     expect(listContainer).toBeTruthy()
                 })
                 describe('the individual habit cards', () => {
                     test('the habit card exists', () => {
                        const habitCard = document.getElementsByClassName('task')
                        expect(habitCard).toBeTruthy()
                     })
                     test('the habit card has a habit name', () => {
                         const name = document.getElementsByClassName('task-name')
                         expect(name).toBeTruthy()
                     })
                     test('the habit card contains a streak number', () => {
                         const streak = document.querySelector('.streak-number')
                         expect(streak).toBeTruthy()
                         expect(streak.textContent).toBe('5')                     
                     })
                     test('the habit card has a circle navigation button', () => {
                        const circle = document.getElementsByClassName('circle')
                        expect(circle).toBeTruthy()
                    })
                    test('the habit card has an options button', () => {
                        const options = document.getElementsByClassName('options noselect')
                        expect(options).toBeTruthy()
                    })
                 })
                 describe('the create button', () => {
                     test('the create tab exists', () => {
                         const createButton = document.getElementsByClassName('add-task')
                         expect(createButton).toBeTruthy()
                     })
                 })

                 describe('the create habit modal form', () => {
                    test('create modal to contain a form', () => {
                        const createForm = document.querySelector('form')
                        expect(createForm).toBeTruthy()
                   })
                     test('create modal form contains an input for habit name', () => {
                         const habitNameInput = document.getElementById('habit-name')
                         expect(habitNameInput).toBeTruthy()
                     })
                     test('create modal form contains radiobuttons for habit frequency', () => {
                         const freqInput = document.querySelector('.form-check-input')
                         expect(freqInput).toBeTruthy()
                         expect(freqInput.getAttribute('type')).toBe('radio')
                     })
                     test('create modal form contains target value input', () => {
                         const createModalTarget = document.querySelector('#habit-target')
                         expect(createModalTarget).toBeTruthy()
                         expect(createModalTarget.getAttribute('type')).toBe('number')
                     })
                     test('create modal form cotntains a submit button', () => {
                         const createSubmitButton = document.querySelector('#submit-new-habit')
                         expect(createSubmitButton).toBeTruthy()
                         expect(createSubmitButton.textContent).toContain('Submit new habit')
                     })
                 })
             })
             describe('the details of the individual habits container', () => {
                 describe('the graph', () => {
                     test('the chart canvas exists', () => {
                         const chart = document.querySelector('canvas')
                         expect(chart).toBeTruthy()
                     })
                 })
                 describe('the habit info displayer', () => {
                     test('current streak section exists', () => {
                         const currentStreakSection = document.querySelector('.current-streak')
                         expect(currentStreakSection).toBeTruthy()
                         expect(currentStreakSection.textContent).toContain('🔥 current streak')
                     })
                     test('current streak section contains streak number', () => {
                         const currentStreakSectionNumber = document.getElementById('current-streak-number')
                         expect(currentStreakSectionNumber).toBeTruthy()
                     })
                     test('best streak section exists', () => {
                        const bestStreakSection = document.querySelector('.streak-text')
                        expect(bestStreakSection).toBeTruthy()
                        expect(bestStreakSection.textContent).toContain('💎 best streak')
                    })
                    test('best streak section contains streak number', () => {
                        const bestStreakSectionNumber = document.getElementById('best-streak-number')
                        expect(bestStreakSectionNumber).toBeTruthy()
                    })
                    test('days completed section exists', () => {
                        const daysCompletedSection = document.querySelector('.days-completed')
                        expect(daysCompletedSection).toBeTruthy()
                        expect(daysCompletedSection.textContent).toContain('✔ days completed')
                    })
                    test('days completed section contains completed number', () => {
                        const daysCompletedSectionNumber = document.getElementById('days-completed-number')
                        expect(daysCompletedSectionNumber).toBeTruthy()
                    })
                    test('days tracked section exists', () => {
                        const daysCompletedSection = document.querySelector('.days-tracked')
                        expect(daysCompletedSection).toBeTruthy()
                        expect(daysCompletedSection.textContent).toContain('🕑 days tracked')
                    })
                    test('days tracked section contains completed number', () => {
                        const daysCompletedSectionNumber = document.getElementById('days-tracked-number')
                        expect(daysCompletedSectionNumber).toBeTruthy()
                    })
                 })
             })
         })
         describe('footer', () => {
             test('contains facebook social media icon', () => {
                 const facebook = document.getElementsByClassName('fab fa-facebook-f')
                 expect(facebook).toBeTruthy()
             })
             test('contains instagram social media icon', () => {
                const instagram = document.getElementsByClassName('fab fa-instagram')
                expect(instagram).toBeTruthy()
            })
            test('contains twitter social media icon', () => {
                const twitter = document.getElementsByClassName('fab fa-twitter')
                expect(twitter).toBeTruthy()
            })
            test('contains copyright information', () => {
                const copyright = document.querySelector('.text-muted')
                expect(copyright).toBeTruthy()
                expect(copyright.textContent).toContain('habitab.com')
            })
         })
    })
 })