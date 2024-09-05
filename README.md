# Backend Task - Personaliz.ai

## Project Overview

This project is a backend task for Personaliz.ai, involving the development of a Node.js application using ExpressJS. The project includes two main tasks:

1. **Task 1:** Implement a CRUD application to manage contacts either through a MySQL database or the FreshSales CRM API.
2. **Task 2:** Create a Node.js script using the Twilio API to send personalized IVR calls and, based on user input, send a follow-up message with a personalized interview link.

## Project Structure


## Features

### Task 1: CRUD Operations with FreshSales CRM and MySQL

- **Create Contact** (`POST /createContact`): Create a new contact either in the FreshSales CRM or the MySQL database.
- **Get Contact** (`POST /getContact`): Retrieve contact details based on the `contact_id` from the FreshSales CRM or the MySQL database.
- **Update Contact** (`POST /updateContact`): Update contact information (email and mobile number) in either the FreshSales CRM or the MySQL database.
- **Delete Contact** (`POST /deleteContact`): Delete a contact from either the FreshSales CRM or the MySQL database.

### Task 2: Twilio IVR Call Script

- **IVR Call**: Send a personalized IVR call to a user with an option to express interest by pressing `1`.
- **Follow-up SMS**: If the user presses `1`, send a personalized interview link via SMS using Twilio's messaging service.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 18.17.1 or higher)
- [MySQL](https://www.mysql.com/downloads/)
- FreshSales CRM Account and API Key
- Twilio Account and API Key

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/backend-task.git
   cd backend-task
   
CREATE DATABASE your_db_name;
USE your_db_name;

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  mobile_number VARCHAR(15)
);


{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "mobile_number": "1234567890",
  "data_store": "CRM" // or "DATABASE"
}
