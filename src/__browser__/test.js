#!/usr/bin/env node

var ecstatic = require('ecstatic');
var fs = require('fs');
var http = require('http');

var webdriver = require('selenium-webdriver');

var server = http.createServer(ecstatic({root: __dirname})).listen(function(err) {
  if (err) {
    throw err;
  }

  var port = this.address().port;

  var htmlFiles = fs.readdirSync(__dirname).filter(function(e) {
    return e.match(/\.html$/);
  });

  var driver = new webdriver.Builder().forBrowser('chrome').build();

  (function next() {
    var htmlFile = htmlFiles.shift();
    if (!htmlFile) {
      driver.quit();
      return server.close();
    }

    driver.get('http://127.0.0.1:' + port + '/' + htmlFile);

    function passed() {
      console.log('passed!');
      next();
    }

    function failed() {
      console.log('failed!');
      next();
    }

    var p = driver.wait(webdriver.until.elementLocated({
      id: 'test-success',
    }), 5000);

    p.then(passed, failed);
  }());
});
