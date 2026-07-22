import {test} from '@playwright/test'

test('launchSalesforce', async({page})=>{

    await page.goto('https://login.salesforce.com/')
    
    //login
    await page.locator('//div[@id="username_container"]/input[@type="email"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('(//label[@for="password"]/following-sibling::input)[1]').fill('TestLeaf@2025')
    await page.locator('//input[@type="password"]/following::input[@id="Login"]').click()
     
    console.log(page.url());
    console.log(await page.title());

    await page.locator('//div[@class="slds-icon-waffle"]').click()
    await page.locator('//button[@aria-label="View All Applications"]').click()
    //navigate accounts
    await page.locator('//input[contains(@placeholder,"Search apps")]').fill('account')
    await page.locator('//a[@data-label="Accounts"]').click()

   //create new
    await page.locator("//li[@data-target-selection-name='sfdc:StandardButton.Account.New']/a[@title='New']").click()
    
    await page.locator("//label[text()='Account Name']/following-sibling::div/input").fill('test')
    
    await page.locator('//button[@aria-label="Type"]').click()
    await page.locator("//span[text()='Competitor']").click()
    //button[@data-value="Customer"]').click()
    
    await page.locator('//button[@aria-label="Industry"]').click()
    
    await page.locator("//span[text()='Banking']").click()
    //save account
    await page.locator("//button[@name='SaveEdit']").click()
    




    



    
    
    
    
//(//div[contains(text(),'New')])[2]

    
    


    


})