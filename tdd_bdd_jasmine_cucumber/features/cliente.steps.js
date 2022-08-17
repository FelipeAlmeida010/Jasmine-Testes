const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const path = require('path');
const { ServiceBuilder } = require('selenium-webdriver/chrome');
const { Builder, By, Key, until } = require('selenium-webdriver');

const pathDriver = "C:\\Users\Josep\AppData\Local\Temp\Rar$EXa34932.28914\chromedrver.exe";
const serviceBuilder = new ServiceBuilder(pathDriver);

const driver = new Builder().forBrowser('chrome').setChromeService(serviceBuilder).build();



Given('I\'m have \\{{qtd}} clients in my database', function (string) {
// Given('I\'m have \\{{float}} clients in my database', function (float) {
// Write code here that turns the phrase above into concrete actions
//return 'pending';
console.log("inserir os dados na base")
});

   

When('I access the home webpage', async function () {
// Write code here that turns the phrase above into concrete actions
//return 'pending';
await driver.get('http://localhost:3000')
await driver.sleep(1000)
});

   

Then('see the list of \\{{qtd}} itens', function (string) {
// Then('see the list of \\{{float}} itens', function (float) {
// Write code here that turns the phrase above into concrete actions
//return 'pending';
assert(await driver.findElement(By.tagName.name('tr')).length).toBeEqual(10)
});