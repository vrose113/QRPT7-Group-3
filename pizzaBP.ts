import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class Pizza extends BasePage {
    menu: By = By.xpath("//button[@id='menu']")
    pizza: By = By.xpath("//a[@title='Pizza']")
    cart: By = By.className("jss68")
    signIn: By = By.xpath("//a[@title='Sign In']")
    createAccount: By = By.xpath("//a[@title='Create an account']")
    siteMap: By = By.xpath("//a[@title='Sitemap']")
    findDeals: By = By.className("jss100")
    zip: By = By.id("carryout-city-state-zip")
    continue: By = By.xpath("//button[@data-testid='store-tile-btn-0']")
    findAPizzaHut: By = By.xpath('(//a[@href="https://www.pizzahut.com/locator"])[1]')
    delivery: By = By.xpath('//a[text()="Delivery"]')
    logIn: By = By.xpath('//a[text()="Sign In"]')
    deals: By = By.xpath('//a[text()="Deals"]')
    nutrition: By = By.xpath('//a[text()="Nutrition"]')
    FAQS: By = By.xpath('//a[text="FAQS"]')
    storeOpeningsInformation: By = By.xpath('//a[text="Store Openings Information"]')
    spanish: By = By.xpath('//a[@title="Espanol"]')
    constructor() {
        super({url: "https://www.pizzahut.com/"});
    }
}