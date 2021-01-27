# Puppeteer_exercises

## Puppeteer
Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the [DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/). Puppeteer runs headless by default, but can be configured to run full (non-headless) [Chrome](google.com/chrome/) or [Chromium](https://www.chromium.org/).

##### PROS
* Actively developed and promoted by Google
* Complete API for Chromium included
* Runs a real browser

##### CONS
* Not good for Cross Browser Tests (you can also try [Selenium](https://www.selenium.dev/) as a replacement)
* Official Firefox support is currently experimental

### Installation
<br>`npm i puppeteer` (When you install Puppeteer, it downloads a recent version of Chromium that is guaranteed to work with the API.)
<br>`npm i puppeteer-core`

### Usage
Execute script on the command line `node [the script name]`

### Reference
[GitHub Repo](https://github.com/puppeteer/puppeteer)
[API documentation for Puppeteer](https://github.com/puppeteer/puppeteer/blob/v5.5.0/docs/api.md)
