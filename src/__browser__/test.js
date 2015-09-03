#!/usr/bin/env node

var fs = require('fs');

var webdriver = require('selenium-webdriver');

var htmlFiles = fs.readdirSync(__dirname).filter(function(e) {
  return e.match(/\.html$/);
});

var port = process.env.PORT || 8080;

var driver = new webdriver.Builder().forBrowser('chrome').build();

(function next() {
  var htmlFile = htmlFiles.shift();
  if (!htmlFile) {
    return driver.quit();
  }

  driver.manage().window().setSize(800,600);
  driver.get('http://127.0.0.1:' + port + '/' + htmlFile);

  function passed() {
    console.log('Test passed!');
    next();
  }

  function failed() {
    console.log('Test failed!');
    next();
  }

  var p = driver.wait(webdriver.until.elementLocated({
    id: 'test-success',
  }), 5000);

  p.then(passed, failed);
}());
