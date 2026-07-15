let browser = 'chrome'
function checkBrowserVersion (callback){
     setTimeout (() =>  callback(), 2000)
}
function browserVersion() {
    console.log(browser);
}
checkBrowserVersion(browserVersion)