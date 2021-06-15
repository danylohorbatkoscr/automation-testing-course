class MainPage {
    async getInputButton() {
        return await $('.DocSearch');
    }


    async clickInputButton() {
        const inputButton = await this.getInputButton();
        return await inputButton.click()
    }



    async getInputField() {
        return await $('#docsearch-input');
    }

    async addInputValue(value) {
        const inputField = await this.getInputField();
        await inputField.click()
        return await inputField.addValue(value);
    }

}

module.exports = new MainPage()
