import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class Pizza extends BasePage {

    constructor() {
        super({url: "https://www.pizzahut.com/"});
    }
}