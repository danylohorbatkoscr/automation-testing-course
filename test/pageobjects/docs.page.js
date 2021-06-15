class DocsPage {

    async docsButton() {
        return await $('[href="/docs/gettingstarted"]')
    }

    async clickDocsButton () {
        const docsButton = await this.docsButton();
        return await docsButton.click()
    }
}

module.exports = new DocsPage()







