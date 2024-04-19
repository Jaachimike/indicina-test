To run the tests for this project, follow the following steps:

- clone the repo into your desired folder
- navigate to the server file using 'cd server'
- run " npm install "
- create a .env file under the server folder
- run " npm install " again to ensure all dependencies have been downloaded
- add the following credentials for the database to the .env file " MONGODB_URI=mongodb+srv://okaforjaachi:f51OntGJVaWTs0wY@cluster0.7bsma7u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 "
- save the .env file
- open the terminal and run the line " npm run dev "
- run the line " npm run test " after the database has started
- if any of the tests fails, run the command "npm run test" again and all the tests should run properly
- the desired test result will be provided

To check the test scripts:

- navigate under the /server/tests directory to view the different test scripts

To run the full project:

- navigate into the client folder and run 'npm install'
- run 'npm run dev' after to start up the react application
- ensure the database is running by navigating to the server folder and running 'npm run dev'
