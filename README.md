# Money-Tracker App

This project is part of an Alkemy (https://campus.alkemy.org/) challenge to buil a budget control application
The app was built using Express and React. The database chosen was Postgres and it was handled with Sequelize ORM. For the Auth part, I used JWT.

Once downloaded the repository, it is important to create the following files to be able to run it:

/server/.env
Here store the TOKEN_SECRET variable for the JWT Auth.

/server/cong/config.json
Sequelize file created, to store DB credential acceses.


## Pendings:
There are several pending tasks in this app challenge that I couldn't finish on time:
- correctly redirect the user from the Login to the Home page
- include flash cards to let the user know msgs like errors
- in the Topbar, include the profile picture (thumbnail field from the DB User table)
- in the Middlebar, include the totals for the income and expenses.
- in the Home, the '+' button should pop into 2 buttons when clicked. One button to add an expense, and the other to add an income 
(this is important so as to prevent the user from making input on the expense field of the User table).
- once the '+' button is improved, redirect the user to the Add form and pass the correct expense boolean.
- in the Home, make the 'delete' button call the API and delete the id in a reactive way.
- in the Forms, add a <- to return to Home.
- in the Forms, resolve the Post and Patch calls to the API.



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
