const assert = require('assert');

it.skip('go to the 2-Step of Verification page', async() => {
    await browser.url("https://github.com/");
    await browser.pause(3000);
    const signInButton = await $('[href="/login"]');
    await signInButton.click();
    await browser.pause(2000);
    const logInput = await $('#login_field');
    await logInput.click();
    await browser.pause(2000);
    await logInput.setValue("");
    await logInput.setValue("danylohorbatkoscr");
    await browser.pause(2000);
    const passInput = await $('#password');
    passInput.click();
    await browser.pause(2000);
    await passInput.setValue("");
    await passInput.setValue("webdrivertest123");
    await browser.pause(2000);
    const confirmSignInBtn = await $('.btn');
    await confirmSignInBtn.click();
    await browser.pause(4000);
    const assert = require('assert');
    const header = await $('h1');
    const headerText = await header.innerHTML();
    assert.strictEqual(headerText, 'Device verification code', 'Error')
    
})

it.skip('a tab with this h1 will open:"Device verification code"', async() => {
    await browser.url("https://github.com/");
    await browser.pause(3000);
    const marketplaceButton = await $('[href="/marketplace"]');
    await browser.pause(3000);
    await marketplaceButton.click();
    await browser.pause(3000);
    
})

it('switch to enterprise tab from main page', async() => {
    await browser.url("https://github.com/");
    await browser.pause(3000);
    const input = await $('.header-search-input');
    await input.click();
    await browser.pause(3000);
    await input.setValue("aboba");
    await browser.pause(3000);
    const searchButton = await $('.jump-to-suggestions');
    await searchButton.click();
    await browser.pause(3000);
    const header = await $('.codesearch-results h3');
    console.log(1,header);

    const headerText = await header.getHTML(false);
    console.log(2,headerText);
    

    assert.strictEqual(headerText, '128 repository results', 'Error')

    
})