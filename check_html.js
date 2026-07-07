import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000');
  
  await page.type('input[type="password"]', 'HSVP2026');
  await page.click('button[type="submit"]');

  await new Promise(r => setTimeout(r, 2000));
  
  const html = await page.content();
  console.log("HTML length:", html.length);
  if (html.includes('id="root"')) {
    const rootHtml = await page.evaluate(() => document.getElementById('root').innerHTML);
    console.log("ROOT HTML:");
    console.log(rootHtml.substring(0, 1000)); // print first 1000 chars
  }
  
  await browser.close();
})();
