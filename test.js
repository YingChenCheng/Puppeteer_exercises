const puppeteer = require('puppeteer');
var startTime;
var endTime;

// add all URLs you want to visit here
const urls = [];

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    startTime = Date.now();
    for (var i = 0; i < urls.length; i++){
        await page.goto(urls[i]);
        console.log(page._target._targetInfo.url);
    }
    await browser.close();
    endTime = Date.now();
    console.log((endTime - startTime)/1000 + "s");
})();

run().catch(console.error.bind(console));
