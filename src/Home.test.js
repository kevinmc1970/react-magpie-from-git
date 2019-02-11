import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import {sum, total, formatMultiply} from './sum';
import puppeteer from 'puppeteer';

it('<Home> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// this is an unit-test because just one function tested
test('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
  });

// this an IT because total relies on another function
test('total', () => {
    expect(total(5, 20)).toBe('$25')
});

const multiply = jest.fn(() => 12);
// integration test but we use the mock of 'multiply' method
// multiple could be a database or api call etc
// N.B. This only works if multipy is passed into formatMultiply function!
test('formatMultiply', () => {
    expect(formatMultiply(3,5)).toBe('$12');
    expect(multiply).toHaveBeenCalledTimes(1); 
})

// e2e testing i.e. acceptance testing
// async/await replaces Promise then
// at this point decided to create new app for testing as think this one needs more config
// new app testingtests !
it('e2e', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 200,
        devtools: true,
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    const html = await page.$eval('.App-title', e => e.innerHTML);
    expect(html).toBe('Welcome to React');
    
  
  })