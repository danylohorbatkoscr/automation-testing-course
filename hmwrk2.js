it('HMWRK2', async() => {
    await browser.url('https://webdriver.io/docs/api.html');
    await browser.pause(3000);
    const json = await $('//*[text()="JSONWire protocol"]');
    const link = await json.getAttribute('href');
    console.log("Link: " + link)
    await browser.newWindow(link);
    await browser.pause(4000);

    const home = await $('[href="/SeleniumHQ/selenium/wiki"]');
    const homebutton = await home.isDisplayed();
    console.log("Displayed:? " + homebutton);
    await browser.switchWindow('https://webdriver.io/docs/api');
    await browser.pause(4000);
    const h1 = await $('h1')
    await browser.waitUntil( async() => {
        return h1.getText();
    }, 5000, 'getText error');
    
    const swagStore = await $('[href="http://shop.webdriver.io"]'); // Заменил кнопку "TWITTER" на "Swag Store" из-за того,что с #footer Твиттер не находит,а без него берёться другое значение href,которое находиться выше и скролл просто не выполняеться.
    const isDisplayed = await swagStore.isDisplayed();
    const isDisplayedInViewport = await swagStore.isDisplayedInViewport();
    console.log("isDisplayedInViewport: " + isDisplayedInViewport);
    await browser.pause(2000);
    await swagStore.scrollIntoView();
    await browser.pause(3000);
    const swagStoreSecond = await swagStore.isDisplayedInViewport();
    await browser.pause(3000);
    console.log("isDisplayedInViewport SECOND TURN: " + swagStoreSecond);

    const blogButton = await $('footer [href="/blog"]'); // Взял нижную кнопку "BLOG" так как не вижу разницы с верхней,к ней можно проскролить и выполнить это же действие
    const isFocused = await blogButton.isFocused();
    console.log("isFocused: " + isFocused);
    await blogButton.click();
    await browser.pause(3000);
    const isFocusedSecond =  await blogButton.isFocused();
    console.log("isFocusedSecond: " + isFocusedSecond); // Выдаст так же FALSE так как выполниться переход на другую вкладку









         

})