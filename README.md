# cyltfr-acceptance-tests
Repo for the CYLTFR UI tests

It uses wdio, combined with Mocha framework and Chai assertions library

# Prerequisites

Node.js v22.x.x +

# Install

First clone the repo using:

`$ git clone`

Then from the root of the project folder:

`$ npm i`

This should install all dependacies etc

Linting is built in with neoStandard - you will need to add the eslint extension in VScode.

## Branching Strategy

## Create new branch off development

`$ git checkout -b feature/jira-ticket-number-123 or fix/name-of-branch`

`$ git commit --allow-empty`

`$ git push -u origin feature/jira-ticket-number-123 or fix/name-of-branch`

stage, commit and push as follows (before pushing anything to branch, its recommended you run `npm run lint` script to check linting as this may be checked in the CI pipeline and prevent the tests from running if errors are detected)

`$ git add -A` (for all files) or `$ git add [file name]`

`$ git commit -m "Some descriptive info"`

`$ git push`

Once you are happy all the changes required are ready to be merged, raise a pull request via git, request review, merge

switch to development branch and git pull

`$ git switch development`

`$ git pull`

The changes you have merged should now be in development branch


# Environment variables

| name               | description      | required |        default        |       valid        | notes |
|--------------------|------------------|:--------:|-----------------------|:------------------:|-------|
| CYLTFR_APP_URL | Target Environment url |    Yes   |                       |    | The wdio.config.js file lines 11-15 contain options on how to pass this url into the tests.  Ideally envars should be used and picked up by the tests, but for easy switching between environments when running locally, the variable can be set directly in the config file.  |
| TESTING_CAPCHA_BYPASS      | Key for captcha bypass |    Yes    |                       |                    |  This can be found in the projects associated config file |


# Run the tests

Environment variables to be set in bashrc. or terminal.  Then to run tests from cli in root of project:

`$ npm run wdio` - This will run all tests.



`$ npm run test` - This will run all tests, and because we have a 'pretest' script, it will run the linting also.  This is mainly for use in pipeline.

`$ npm run wdio -- --spec test/specs/specs/test-name.js` - This will run the specified spec file, rather than the entire set of tests

If running on local Windows machine then to run all tests:

`$ ./node_modules/.bin/wdio ./wdio.conf.js`

If running on local Wiindows machine but only want to run a specific test:

`$ ./node_modules/.bin/wdio run ./wdio.conf.js --spec test/specs/specs/test-name.js`  e.g. where testname = common-test.js

# Report output

The repo has allure reporting plugged in so an easy to view output of the test run can be viewed.

`$ npm run allure`

# Browserstack testing

Currently not in place

# Jenkins pipeline

The tests are run from the jenkins pipeline and are environment agnostic, relying on config files to inject the required environment variables.
