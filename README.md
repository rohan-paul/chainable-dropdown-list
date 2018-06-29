A UI page built with MERN stack (The database served from mLab)

# Basic flow of the current functionality

**From the Express backend, I have feeded data to mLab database with POST request from POSTMAN**

**Then with React Front end will fetch that data from the **http://localhost:5000** and render it.**

**Few basic tests implemented with ``karma``, ``mocha`` and ``expect`` assertion library.**

## Quick Start

# Install dependencies for server
npm install

# Install dependencies for client by navigating to the the /client directory
npm install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000

# To run the the test for client, navigate to /client diretory and run
npm run test