# PEGASUS
An App where imaginary space flights can be scheduled with real data. Basic records of all SpaceX flight is also displayed on the App.
The frontend of this project was designed by Andrew Mead who is an instructor at Zero to Mastery Academy but I 100% wrote the codes.

This is a fullstack project built with React for the frontend; NodeJS, ExpressJS and MongoDB for the backend. 

This app features theoritally inhabitable planets calculated from data published by NASA.
It also features some publicly available details about all SpaceX rocket missions from 2006 till date.
You can also schedule an imaginary flight mission to one of the iinhabitable planets on this App.

This app is built following some best security practices such as helmet and cors as you can verify from the code. 
It features a CI/CD pipeline hosted on github actions that tests any code pulled/pushed to the main branch.

This project is also dockerized and hosted on AWS EC2 instance.

# Running
Before starting this project on your machine, run "npm install" on the root folder to install all dependencies required for both the frontend and backend.
To start only the frontend, navigate to the client folder and run "npm start"
To start only the frontend on watch mode navigate to the project root folder and run "npm run client"
To start only the backend on watch mode, run "npm run server" on the project root folder
To start the frontend and backend concurrently, run "npm run watch"
To build the frontend, navigate to the client folder and run "npm run build"
To build the project and serve with backend, run "npm deploy" in the root folder
To run the project on PM2, run "npm run deploy-cluster" in the root 

# Testing
Jest and Supertest are the 2 libraries used to test the backend code and React-test is what is used on the frontend.
To run this test, run "npm run test" in the project root folder
To test only the backend, run "npm run test" in the server folder
To test only the backend on watch mode, run "npm run test-watch" on the server folder
