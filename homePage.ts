import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class HomePage extends BasePage {
    //add selectors below this line and above the constructor line!!//
    menu: By= By.xpath("//button[@id='menu']")
    cart: By = By.className("jss68")
    signIn: By = By.xpath("//a[@title='Sign In']")
    createAccount: By = By.xpath("//a[@title='Create an account']")
    siteMap: By = By.xpath("//a[@title='Sitemap']")
    findDeals: By = By.className("jss100")
    constructor() {
        super({url: "https://www.pizzahut.com/"})
    }
}