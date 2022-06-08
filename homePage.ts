import { By, WebDriver } from 'selenium-webdriver'
import {BasePage} from './basePage'

export class HomePage extends BasePage {
    //add selectors below this line and above the constructor line!!//
    menu: By= By.xpath("//button[@id='menu']")
    pizza: By = By.xpath("//a[@title='Pizza']")
    cart: By = By.className("jss68")
    signIn: By = By.xpath("//a[@title='Sign In']")
    createAccount: By = By.xpath("//a[@title='Create an account']")
    siteMap: By = By.xpath("//a[@title='Sitemap']")
    findDeals: By = By.className("jss100")
    zip: By = By.id("carryout-city-state-zip")
    continue: By = By.xpath("//button[@data-testid='store-tile-btn-0']")
    constructor(driver: WebDriver) {
        super({url: "https://www.pizzahut.com/", driver})
    }
}