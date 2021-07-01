# MDLIVE QA Challenge

## Getting Started

Clone the repository

`https://github.com/cisahack/pagination-challenge.git`

Install the dependencies:

- npm install

Run the local backend server:

- npm start

Run testing:

- npm run test

## Main website:

https://pagination-challenge-test.herokuapp.com/

## Example endpoints:

https://pagination-challenge-test.herokuapp.com/apps?by=id&start=5

https://pagination-challenge-test.herokuapp.com/apps?by=id&start=5&end=10

https://pagination-challenge-test.herokuapp.com/apps?by=id&max=30

https://pagination-challenge-test.herokuapp.com/apps?by=id&max=2&start=5&end=10

https://pagination-challenge-test.herokuapp.com/apps?by=name&start=my-app-003&end=my-app-015&order=asc

https://pagination-challenge-test.herokuapp.com/apps?by=name&start=my-app-003&end=my-app-015&order=desc

## Solution

- Technologies used are Express, Node, and Jest.

1. I populated the seed data for the array of apps.

2. I then utilized functions that are able to filter out the requested parameters. The user is able to key in various params in order to get the filtered out results.

3. With Jest, the user can run automatic tests.
