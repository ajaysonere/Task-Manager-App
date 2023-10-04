# Task Manager Web App

This is a web application for Oragnize the task , designed to provide better understanding of time ,habits , and taking actions.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a list of available Task .
- Detailed information about each Task , Whether is pending or completed.
- User can perform the CRUD operation .
- User-friendly Task Booking System.
- User dashboard to manage booked tours

## Technologies Used

- **Frontend:**
  - React.js for building the user interface.
  - HTML, CSS, and JavaScript for frontend development.
  - Redux for state management.
  - Fetch/Axios for making HTTP requests to the backend.

- **Backend:**
  - Node.js and Express.js for building the server.
  - MongoDB for the database.

## Installation

To run the ToursAndTravels web app on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ajaysonere/ToursAndTravels.git
   cd "Task Manager App"
2. Install Frontend Dependencies:
   ```bash
      cd task-manager-frontend
      npm install  
3. Install backend dependencies:
   ```bash
       cd ../TaskManagerAPI
       npm install  

## Configuration

Before running the application, you need to set up some configuration settings in the backend:

1. Create a .env file in the backend directory and configure the following environment variables:
   
   ```bash
        PORT=3800
        dbUrl='YOUR_MONGODB_CONNECTION_STRING'
   
2. Replace 'YOUR_MONGODB_CONNECTION_STRING' with your MongoDB database connection string.

## Usage

To start the application, follow these steps:

1. Start the backend server:
   ```bash
     cd TaskManagerAPI
     node index.js
   
2. Start the Frontend development server:
   ```bash
    cd task-manager-frontend
    npm start
   
3. Access the application in your web browser at http://localhost:3000.

4. Explore the web app's features and functionalities to browse travel destinations, book tours, and manage your travel activities.
