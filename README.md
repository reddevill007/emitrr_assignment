# Language Learning Game Readme [Live Preview](https://emitrrsp.vercel.app/)


## Overview

Welcome to the Language Learning Game! This Readme file provides instructions on setting up and running the game locally. Our language learning application is built using Next.js, Tailwind CSS, Prisma, MongoDB, and NextAuth.

## Prerequisites

Before you begin, please ensure you have the following prerequisites:

- Node.js installed on your local machine
- Access to a MongoDB database server and its connection string
- Prisma CLI installed globally (`npm install -g prisma`)

## Getting Started

1. **Clone the repository to your local machine:**

   ```sh
   git clone <repository-url>
   cd language-learning-game

## Installation

To set up and run the Language Learning Game, follow these steps:

1. Install dependencies using npm:

   ```sh
   npm install
   
# Language Learning Game Readme

## Setup

1. Create a `.env.local` file in the root directory and add the following environment variables:

    ```env
    DATABASE_URL=your-mongodb-connection-string
    SECRET=your-secret-key-for-next-auth
    ```

2. Set up the database schema using Prisma:

    ```sh
    prisma migrate dev
    ```

3. Populate the database with initial language data and exercises.

4. Run the development server:

    ```sh
    npm run dev
    ```

5. Access the application in your browser at [http://localhost:3000](http://localhost:3000).

## Features and Usage

- **User Registration and Login**: Users can register and log in to the application using NextAuth authentication system.

- **Language Selection**: Users can choose the language they want to learn from a list of available languages.

- **Interactive Exercises**: The frontend provides interactive and user-friendly exercises for language learning. Clear instructions and feedback are displayed to users during the exercises.

- **Backend APIs**: Backend APIs handle language learning logic, scoring system, exercise questions, and user answers evaluation.

- **Database Management**: MongoDB database is used to store user language proficiency levels, progress, and exercise data. An efficient database schema is designed to manage user data effectively.

## Customization

- Modify the frontend components in the `app` and `components` directories to customize the UI.

- Update backend APIs in the `api` directory for specific language learning logic customization.

## Test User

You can use the following test user to explore the Language Learning Game:

- **Email:** testuser@gmail.com
- **Password:** Test@123

Please note that this is a test account, and you can use it to test the registration, login, and language exercises. For security reasons, it's recommended to create your own account for real usage.


## Troubleshooting

If you encounter any issues during setup or usage, please refer to the documentation of Next.js, Tailwind CSS, Prisma, MongoDB, and NextAuth for troubleshooting guides.

Enjoy learning with the Language Learning Game! If you have any further questions or need assistance, feel free to reach out to the development team.
