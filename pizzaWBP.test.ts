import { Pizza } from "./pizzaBP";
import { Driver } from "selenium-webdriver/chrome";
import { BasePage } from "./basePage";
const pizza = new Pizza()

test('Ensure Site Map functions',async () => {
    await pizza.navigate()
    await pizza.click(pizza.siteMap)
    await pizza.click(pizza.findAPizzaHut)
    expect (pizza.findAPizzaHut).toContain("Find A Pizza Hut")
    await pizza.click(pizza.siteMap)
    await pizza.click(pizza.delivery)
    expect (pizza.delivery).toContain("Delivery")
    await pizza.click(pizza.siteMap)
    await pizza.click(pizza.deals)
    expect (pizza.deals).toContain("Deals")
    await pizza.click(pizza.siteMap)
    await pizza.click(pizza.nutrition)
    expect (pizza.nutrition).toContain("Nutrition")
    await pizza.click(pizza.siteMap)
    await pizza.click(pizza.logIn)
    expect (pizza.logIn).toContain("Sign In")
    await pizza.click(pizza.siteMap)
    await pizza.click(pizza.FAQS)
    expect (pizza.FAQS).toContain("FAQS")
    await pizza.click(pizza.siteMap)
    await pizza.click(pizza.storeOpeningsInformation)
    expect (pizza.storeOpeningsInformation).toContain("Store Openings Information")
    await pizza.click(pizza.siteMap)
})
test('Ensure spanish version of the website loads.', async () => {
    await pizza.navigate()
    await pizza.click(pizza.siteMap)
    await pizza.click(pizza.spanish)
    expect(pizza.spanish).not.toContain("rasgo")
})
test('Ensure that spanish translation option is shown on the main page.',async () => {
    await pizza.navigate()
    expect(pizza.url).not.toContain("Español")
    await pizza.click(pizza.spanish)
})
afterAll(async () => {
    await pizza.driver.quit()
})