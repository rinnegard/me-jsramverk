/**
 * Test for getting started with Selenium.
 */
"use strict";



const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;

let browser;


// Does not work with WSL!! Use cygwin



// Test suite
test.describe("React", function() {
    test.beforeEach(function(done) {
        this.timeout(20000);
        browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://localhost:3000");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });


    function goToNavLink(target) {
        browser.findElement(By.linkText(target)).then(function(element) {
            element.click();
        });
    }

    function matchUrl(target) {
        browser.getCurrentUrl().then(function(url) {
            console.log(url);
            assert.ok(url.endsWith("/" + target));
        });
    }

    function assertH1(target) {
        browser.findElement(By.css("h1")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, target);
            });
        });
    }

    // Test case
    test.it("Test index", function(done) {
        browser.getTitle().then(function(title) {
            assert.equal(title, "React App jsramverk");
        });
        matchUrl("");
        browser.wait(until.elementLocated(By.css('h1')), 500)
        assertH1("Min me-sida i kursen Jsramverk");

        done();
    });


    test.it("Test go to About", function(done) {
        goToNavLink("About");

        assertH1("Information om kursen");
        matchUrl("about");

        done();
    });
});
