import {test} from '@playwright/test'
// import { timeLog } from 'console'
// import { TIMEOUT } from 'dns/promises'

test('createLeadform', async ({page})=> {

await page.goto(' http://leaftaps.com/opentaps/control/main')

await page.locator('[id="username"]').fill('democsr2')
await page.locator('[id="password"]').fill('crmsfa')
await page.waitForTimeout(3000) 
await page.locator('input[value="Login"]').click()

await page.waitForTimeout(3000) 
//await page.waitForURL('https://leaftaps.com/opentaps/control/login');
page.locator('#button').click()
// await page.waitForTimeout(8000) 
await page.locator('a[href="/crmsfa/control/leadsMain"]').click()
await page.waitForTimeout(8000) 
await page.locator('a[href="/crmsfa/control/createLeadForm"]').click()
await page.waitForTimeout(3000) 

//fill form
await page.locator('#createLeadForm_companyName').fill('testOrg')
await page.locator('#createLeadForm_firstName').fill('Sarika')
await page.locator('[id="createLeadForm_lastName"]').fill('R')
await page.locator('#createLeadForm_personalTitle').fill('test')
await page.locator('#createLeadForm_generalProfTitle').fill('test')
await page.locator('#createLeadForm_annualRevenue').fill('10000')
await page.locator('#createLeadForm_departmentName').fill('testing')

await page.locator('select[name="dataSourceId"]').selectOption({label:'Cold Call'})

    const dropdownindex=page.locator('select[name="dataSourceId"]>option')
    const dropdowncount = await dropdownindex.count()
    //print all option
    console.log(`count is ${dropdowncount}`);
    for (let i=0; i<dropdowncount;i++){
      console.log(await dropdownindex.nth(i).innerText());
    }
    page.locator('[id="createLeadForm_primaryPhoneNumber"]').fill('8698679056')
    page.locator('[value="Create Lead"]').click()
} )
