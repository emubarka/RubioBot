const puppeteer = require('puppeteer');
async function start() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    const currentPage = 'https://www.tellrubios.com/Index.aspx?ADACompliance=true'
    await page.goto(currentPage);

    const date = new Date();

    let day = date.getDate() < 10? '0' + date.getDate() : date.getDate();

    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;

    let year = date.getFullYear();

    let hour = date.getHours()

    var pm = false
    if (hour > 12) {
        pm = true
    }
    hour = (hour % 12 || 12) < 10 ? '0' 
    + (hour % 12 || 12) 
    : hour  % 12 || 12;

    let minute = date.getMinutes() < 10 ? '0' 
    + date.getMinutes() 
    : date.getMinutes();

    let delay = 2000;

    await page.$eval('#InputStoreNum', el => el.value = '258')

// await page.$eval('td.ui-datepicker-days-cell-over.ui-datepicker-current-day.ui-datepicker-today class[x^="ui-state-active"]', el => el.click())
    await page.$eval('#InputMonth', (el, value) => el.value = value, month)

    await page.$eval('#InputDay', (el, value) => el.value = value, day)

    await page.$eval('#InputHour', (el, value) => el.value = value, hour)

    await page.$eval('#InputMinute', (el, value) => el.value = value, minute)

    await page.$eval('#InputMeridian', (el, value) => el.value = value, pm ? 'PM' : 'AM')

    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);

    // Overall satisification 
    await page.click('#R001000\\.5')

    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);

    // Dine in
    await page.click('#R000003\\.1')

    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);

    // Register
    await page.click('#R000004\\.2')

    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);

    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);

    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);
    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);
    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);
    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);
    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);
    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);
    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);

    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);

    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);

    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);

    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);

    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);

    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);

    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);

    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);

    await Promise.all([
        page.click('#NextButton'),
        page.waitForNavigation({waitUntil: 'networkidle0'})
    ]);

    var val = await page.$eval("#finishIncentiveHolder > p.ValCode", el => el.innerText)
    console.log(val)

    await page.screenshot({
        path: 'val.jpg'
      });

    setTimeout(async () => {
        await browser.close();
    }, 50000);
}

start()