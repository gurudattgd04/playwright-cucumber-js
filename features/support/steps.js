const assert = require("assert");
const { When, Then, Before, After } = require("@cucumber/cucumber");
const { expect, page } = require("@playwright/test");
const playwright = require("playwright");

When("I visit lambdatest playground", async function () {
  await this.page.goto("https://ecommerce-playground.lambdatest.io/");
});

Then("I should see the page {string}", async function (expectedResponse) {
  await expect(this.page).toHaveTitle(expectedResponse);
});
