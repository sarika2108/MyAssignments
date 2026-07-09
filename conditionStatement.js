
function isOddorEven(x) {
    // var x = 9
    if (x % 2 == 0) {
        console.log('Number is Even');
    }
    else
        console.log('number is odd');
  }
isOddorEven(8);
isOddorEven(9);
isOddorEven(10);


function numberType(y) {
    var y = -9
    if (y == 0) {
        console.log('number is 0');
    }
else if (y > 0) {
    console.log('number is positive');
}
   else {
    console.log('number is negative');
   }
}
numberType()


function launchBrowser(browserName) {
    
    if (browserName == 'chrome') {
        console.log('brower is chrome');
    }
    else if (browserName == 'edge') {
        console.log('browser is edge');
    }
     else {
        console.log('Other browser');
     }
}
launchBrowser('chrome')

function runTests(testType) {
    switch (testType) {
        case 'smoke':
            console.log('test type is smoke');
            break;
        case 'sanity':
            console.log('test type is sanity');
            break;
            case 'regression':
            console.log('test type is regression');    
            break;
        default: 
        console.log('other test type');
            break;
    }
}
runTests('sanity')
