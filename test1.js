const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function example(){
        var searchString = "Selenium Document"
        let driver = await new Builder().forBrowser("chrome").build();
        
        await driver.get("https://platform-nosoftware-7278-dev-ed.cs1.my.salesforce.com/secur/frontdoor.jsp?sid=00DS0000003eSqB!AR0AQP9BoG1rUhf9y25ul5OuNkmzDVhv8uSHKWdYkOfe7NRuNBMOBWAV6N2S1j02vsK7_IW5Sju3UTeMDi9bC8_mnt8DunPJ").then(driver.get("https://platform-nosoftware-7278-dev-ed--trgtfcms.visualforce.com/apex/CandidatePortalSiteSetupPage"));
        driver.findElement(By.name("j_id0:j_id1:pageBlock:SetupButton")).click();
       // driver.findElement(By.a("Candidate Portal Setup")).click();
       // await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);
 
       // var title = await driver.getTitle();
       // console.log('Title is:',title);
 
       // await driver.quit();
 
}
example()