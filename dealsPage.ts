import {By, WebDriver} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class DealsPage extends BasePage {
    //add selectors below this line and above the constructor line!!//
    dropdownMenu: By = By.css("div.ph-header2 a.ph-nav-menu-link")
    pizza: By = By.id("lg-nav-pizza")
    constructor(driver: WebDriver) {
        super({url: "https://www.pizzahut.com/index.php?menu=deals#/menu/deals", driver})
    }
}
