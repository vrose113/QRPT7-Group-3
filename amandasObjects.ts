import {By, WebDriver} from 'selenium-webdriver'
import {BasePage} from './basePage'


export class amandasObjects extends BasePage {
   
   
    dealsButton: By= By.xpath('//div[@class="MuiGrid-root jss9"]') 
    dealsHdr: By= By.xpath('//div[@class="ph-page-title-lrg hidden-xs ph-auto-width ph-page-width ph-titlecase menu-hero-div"]')
    homeButton: By= By.xpath('(//div[@class="ph-header2-logo"])[2]')
    cartGuy: By= By.xpath('//div[@class="MuiGrid-root jss67 MuiGrid-item"]')
    constructor() {
        super({url:'https://www.pizzahut.com/'})
    }
    
}

