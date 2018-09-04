const { After, Given, Then, When } = require('cucumber')

Given('I visit the site', async function() {
    return await this.openHomePage()
})

Then('I should see {string}', async function(content) {
    return await this.sleep(3000);
    return await this.pageHasTextContent(content)
})

After(async function() {
    return await this.closeHomePage()
})