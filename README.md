# cyltfr-acceptance-tests
Repo for the CYLTFR UI tests

It uses wdio, combined with Mocha framework and Chai assertions library

## Branching Strategy

## Create new branch off development

`$ git checkout -b feature/jira-ticket-number-123 or fix/name-of-branch`

`$ git commit --allow-empty`

`$ git push -u origin feature/jira-ticket-number-123 or fix/name-of-branch`

stage, commit and push until branch ready to merge
pull request via git, request review, merge

switch to development branch and git pull

`$ git switch development`

`$ git pull`

The changes you have merged should now be in development branch

## Release Candidate Branching

Assume dev branch up to date with what is to be released

create release candidate branch off development branch

`$ git checkout -b release/name-of-release`

`$ git commit --allow-empty`

`$ git push -u origin feature or fix/name-of-branch`

stage, commit and push until branch ready to merge - in this case the only change likely to be made is app version test.

in github create PR merging release candidate into master
wait for approval in GUI - but do not merge in GUI
in CLI

`$ git switch {release branch}`

`$ git pull`

`$ git switch master`

`$ git pull`

`$ git merge --no-commit {release branch}`

`$ git push`

`$ git switch development`

`$ git merge --no-commit {release branch}`

`$ git push`


This should now have merged the release candidate branch into both dev and master branches, without comimit numbers, and both branches should be aligned.

# Environment variables

TBC - below is an example of what it may look like and is place holder

| name               | description      | required |        default        |       valid        | notes |
|--------------------|------------------|:--------:|-----------------------|:------------------:|-------|
| FLOOD_APP_SITE_URL | Target Environment url |    yes   |                       |    | When running from Jenkins this is picked up through the CONFIG_FILE_DIRECTORY flood-app.profile.  When running locally this needs to be set in in bashrc. Dev or test environment root url will be required. |
| LFW_DATA_DB_CONNECTION | Database Environment connection string |    yes   |                       |   | When running from Jenkins this is picked up through the CONFIG_FILE_DIRECTORY flood-service.profile.  When running locally this needs to be set in in bashrc. |
| BROWSERSTACK_USERNAME      | User             |    no    |                       |                    |Browserstack user |
| BROWSERSTACK_ACCESS_KEY       | Key              |    no    |                       |                    |Browserstack key  |
| PORT               | Port number      |    no    | 4444                  |                    |  Selenium wd     |
| AWS_PROFILE | The target environment | no | =tst-lfw-profile | =tst-lfw-profile | Used for the forecast tests drop files into s3. This is not a required envar provided run forecast tests is set to false, but if you do want to run these tests locally you will need AWS SDK.  See forecast tests section below. |
| AWS_SDK_LOAD_CONFIG | Specify AWS config | no | =1 |  |  |
| RUN_FORECAST_TESTS | Boolean to decide whether to run forecast tests | no | =false | true/false | The jenkins job to execute the flood tests has a choice parameter in place for this.  Note if you want to run the faorecasts tests, they will take up to 15 minutes to wait until data is ready |


# Prerequisites

Node.js v16.x.x +


# Install

First clone the repo using:

`$ git clone`

Then from the root of the project folder:

`$ npm i`

This should install all dependacies etc

# Run the tests

Environment variables to be set in bashrc. or terminal.  Then to run tests from cli in root of project:

`$ npm run wdio`

This will run all tests, to specify suites or test cases, see wdio docs for more detail.

`$ npm run wdio -- --spec test/specs/specs/test-name.js`

This will run the specified spec file, rather than the entire set of tests

If running on local Windows machine then to run all tests:

`$ ./node_modules/.bin/wdio ./wdio.conf.js`

If running on local Wiindows machine but only want to run a specific test:

`$ ./node_modules/.bin/wdio run ./wdio.conf.js --spec test/specs/specs/test-name.js`  e.g. where testname = common-test.js

# Report output

The repo has allure reporting plugged in so an easy to view output of the test run can be viewed.

`$ npm run allure`

# Browserstack testing

A separate webdriver config file, wdio.bstack.conf.js, is used when running Browserstack tests. Note that for these tests a Browserstack user and key will be required. These should be set up as environment variables.  At present it is advisabe to run Browserstack tests against specific tests to keep running time at an optimum. The tests to run are specified in the wdio.bstack.conf.js file.  The device, os, and browser combinations are specified in the browsers.js file.  To run the browserstack tests -

`$ npm run bstack `
