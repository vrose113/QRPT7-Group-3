import {By, WebDriver} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class amandasObjects extends BasePage {
        //Amanda's sign in test
        signInBtn: By= By.xpath('//div[@class="MuiGrid-root jss7 MuiGrid-item"]')
        eMailInput: By = By.xpath('(//input[@class="form-control form-input"])[1]')
        passwordInput: By = By.xpath('(//input[@class="form-control form-input"])[2]')
        rememberMe: By = By.xpath('//input[@class="remember-checkbox"]')
        notARobot: By = By.xpath('//span[@class="recaptcha-checkbox goog-inline-block recaptcha-checkbox-unchecked rc-anchor-checkbox"]')
        signInBtn2: By = By.xpath('//button[@class="btn btn-danger btn-lg btn-block sign-in-btn"]')
    
        //Amanda's Remember me function test
        hiJohnBtn: By = By.xpath('//button[@class="MuiButtonBase-root MuiButton-root MuiButton-text jss13"]')
        signOutButton: By= By.xpath('//li[@class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root jss22 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"]')
        //Use sign in button for next step, email input for the next step expect.toBe("manpizza695@gmail.com") 
    }
