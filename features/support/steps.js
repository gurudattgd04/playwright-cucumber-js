const assert = require("assert");
const { When, Then, Before, After } = require("@cucumber/cucumber");
const { expect, page } = require("@playwright/test");
const playwright = require("playwright");

let browser;
const tracesDir = "traces";
let context;

Before(async function () {
  browser = await playwright.chromium.launch({
    headless: false,
  });
  context = await browser.newContext();
  this.page = await context.newPage();

  await context.tracing.start({ screenshots: true, snapshots: true });

  this.page.on("console", async (msg) => {
    if (msg.type() === "log") {
      await this.attach(msg.text());
    }
  });
});

After(async function () {
  await context?.tracing.stop({
    path: `${tracesDir}/${this.testName}-${123}trace.zip`,
  });
  await browser.close();
});

When("I visit lambdatest playground", async function () {
  await this.page.goto("https://ecommerce-playground.lambdatest.io/");
});

Then("I should see the page {string}", async function (expectedResponse) {
  await expect(this.page).toHaveTitle(expectedResponse);
});
