A UI page built with MERN stack (The database served from mLab)

# Basic flow of the current functionality

**From the Express backend, I have feeded data to mLab database with POST request from POSTMAN**

**Then with React Front end will fetch that data from the **http://localhost:5000** and render it.

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000


** While fetching database from http://localhost:4000/ was facing errors with [CORS issues](http://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations) .Fetch API cannot load http://localhost:5000/. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. Hence used the package **cors**.