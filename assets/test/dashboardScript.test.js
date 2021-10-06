// /**
//  * @jest-environment jsdom
//  */
const dashboard = require('../js/dashboardScript')

class LocalStorageMock {
    constructor() {
      this.store = {};
    }
  
    clear() {
      this.store = {};
    }
  
    getItem(key) {
      return this.store[key] || null;
    }
  
    setItem(key, value) {
      this.store[key] = String(value);
    }
  
    removeItem(key) {
      delete this.store[key];
    }
  }
  
  global.localStorage = new LocalStorageMock;

  class WindowMock {
      constructor() {
          this.window = {location : {href: "./index.html"}}
      } 
  }

  global.window = new WindowMock

//const window = {location : {href: "./index.html"}}

//global.window = Object.create(window);

describe('dashboard functions', () => {
    describe('logoutHandler functions', () => {
        test('it works', () => {
            const event = {preventDefault: () => {}}
        // const localStorage = {clear: () => {}}
        // const window = {location: {href:""}}
        expect(dashboard.logoutHandler(event)).toEqual(undefined)
        })
    })
})