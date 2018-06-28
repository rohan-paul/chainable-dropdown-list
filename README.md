A UI page built with MERN stack (The database served from mLab)

# Basic flow of the current functionality

**From the Express backend, I have feeded data to mLab database with POST request from POSTMAN**

**Then with React Front end will fetch that data from the **http://localhost:5000** and render it.

Deployed [here in Heroku](https://react-dynamic-drop-down.herokuapp.com/)

# In the local machine best way to test the working version is as follows:

# Install dependencies for server
``npm install`` from the project root

# Then from inside the client directory, install dependencies for client
``npm run client-install``

# Run the client & server with concurrently
``npm run dev``

Server runs on **http://localhost:5000** and client on **http://localhost:3000**


** While fetching database from http://localhost:4000/ was facing errors with [CORS issues](http://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations) .Fetch API cannot load http://localhost:5000/. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. Hence used the package **cors**.