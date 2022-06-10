import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
//const chromedriver = require("chromedriver");
//const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
import { amandasObjects } from "./amandasObjects";

const myTest = new amandasObjects

test("Deals", async () => {
    await myTest.navigate()
    await myTest.click(myTest.dealsButton)
    let response = await myTest.getText(myTest.dealsHdr)
    expect (response).toContain("DEALS")
    

});

test("Back to home page button", async () => {
    await myTest.click(myTest.homeButton)
    let response = await myTest.getText(myTest.cartGuy)
    expect(response).toContain("$0.00")
});
