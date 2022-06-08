import {By, WebDriver} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class OrderPage extends BasePage {
    //add selectors below this line and above the constructor line!!//
    cartItemName: By = By.xpath("//*[@data-ng-bind-html='item.name']")
    remove: By = By.className("price-item-remove")
    yesRemove: By = By.id("modal-button-Yes")
    noItems: By = By.className("ph-sentence")
    constructor(driver: WebDriver) {
        super({url: "https://www.pizzahut.com/index.php?menu=pizza#/order", driver})
    }
}