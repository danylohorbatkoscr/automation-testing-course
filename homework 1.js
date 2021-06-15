it('hmwrk1', async() => {
    await browser.url('https://webdriver.io');
    await browser.pause(3000);
    const apiButton = await $('a[href="/docs/api"]');
    await apiButton.click();
    await browser.pause(2000);
    const currentUrl = await browser.getUrl();
    console.log("currentUrl: " + currentUrl);
    const h1 = await $('h1');
    const h1Text = await h1.getText();
    console.log("h1Text: " + h1Text);
    const json = await $('//*[text()="JSONWire protocol"]');
    const jsonHref = await json.getAttribute('href');
    console.log("jsonHref: " + jsonHref);
    const inputButton = await $('.DocSearch');
    await inputButton.click();
    await browser.pause(2000);
    const input = await $('#docsearch-input');
    await input.setValue("test is ");
    await input.addValue("DONE!");
    await browser.pause(5000);











})