import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from './../pom/login.page';
import SecurePage from './../pom/secure.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/,  (page) => {
     console.log("++++++++++++++++++++++++++++++++++++++my args : ",process.argv[process.argv.length-1]);
     pages[page].open()
});

When(/^I login with (\w+) and (.+)$/,  (username, password) => {
     LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/,  (message) => {
     expect(SecurePage.flashAlert).toBeExisting();
     expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

