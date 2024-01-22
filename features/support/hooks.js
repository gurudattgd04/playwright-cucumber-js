const { expect, page } = require("@playwright/test");
const { Before, After } = require("@cucumber/cucumber");
const playwright = require("playwright");

let tracesDir = "traces";

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
