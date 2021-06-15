it('should demonstrate  setValue command', async() => {
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
    const findtitle = await $('h1'); // Не юзаю whaitUntil из-за того,что операции с элементами браузера выполняються ассинхронно и мы и так ожидаем последовотельного выполнения при помощи ключевого слова "await".
    const title = await findtitle.getText();
    console.log("Title: " + title);
    await findtitle.saveScreenshot("titlescreenshot.png");

         

})