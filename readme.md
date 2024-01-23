#Playwright BDD Scenario Examples using Javascript

This Project contains examples of using Playwright as browser automation tool and tests written in BDD format.

Since there are limitations using Cucumber-js with playwright(playwright doesn't consider the configuration management while launching it from Cucumber-js runner) we are using [Playwright-bdd](https://github.com/vitalets/playwright-bdd#readme) runner for achieving BDD style tests scripting and execution.

## Scenario Execution

Once we clone the project, install the depenencies by executing below command

```
npm install
```

After installation run the tests by executing below command

```
npx bddgen && npx playwright test
```

