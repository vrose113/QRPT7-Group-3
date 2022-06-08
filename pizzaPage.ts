import {By, WebDriver} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class PizzaPage extends BasePage {
    //add selectors below this line and above the constructor line!!//
    addPeptoOrder: By = By.id("ato-pepperoni-pizza")
    fullCart: By = By.id("cart2-header")
    constructor(driver: WebDriver) {
        super({url: "https://www.pizzahut.com/index.php?menu=deals#/menu/pizza/popular-pizzas", driver})
    }
}