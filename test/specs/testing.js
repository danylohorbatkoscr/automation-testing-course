const assert = require('assert');
const mainPage = require('../pageobjects/main.page')
const docsPage = require('../pageobjects/docs.page')

describe('webdriver.io page', async() => {

    it('hmwrk7', async() => {
        await browser.url('https://webdriver.io/');
        await browser.pause(2000);

        await mainPage.clickInputButton();

        await mainPage.addInputValue('test ');
        await browser.pause(2000);

        const searchInput = await  mainPage.getInputField();

        await searchInput.addValue('type with method')
        await browser.pause(3000);

    })

    it('hmwrk8', async() => {
        await browser.url('https://webdriver.io/')
        await browser.pause(1000);
        await docsPage.clickDocsButton();
        await browser.pause(3000);

        




    })






})