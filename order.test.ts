import { HomePage } from "./homePage";
import { PizzaPage } from "./pizzaPage";
import { DealsPage } from "./dealsPage";
import { OrderPage } from "./orderPage";
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const homePage = new HomePage(driver);
const pizzaPage = new PizzaPage(driver);
const dealsPage = new DealsPage(driver);
const orderPage = new OrderPage(driver);

describe("Ordering", () => {
    beforeEach(async () => {
        await homePage.navigate();
    });
    afterAll(async () => {
        await driver.quit();
    })
    test("create an order", async () => {
        await homePage.click(homePage.findDeals);
        await homePage.setInput(homePage.zip, "92325\n");
        await homePage.click(homePage.continue);
        await dealsPage.click(dealsPage.dropdownMenu);
        await dealsPage.click(dealsPage.pizza);
        await pizzaPage.click(pizzaPage.addPeptoOrder);
        await pizzaPage.click(pizzaPage.fullCart);
        const result = await orderPage.getText(orderPage.cartItemName);
        expect(result.toLowerCase()).toContain("pepperoni");
    })
    test("remove from cart", async () => {
        await homePage.click(homePage.cart);
        await orderPage.click(orderPage.remove);
        await driver.executeScript("$('#modal-button-Yes').click()");
        const result = await orderPage.getText(orderPage.noItems);
        expect(result.toLowerCase()).toContain("there are no items in your order.");
    })
});