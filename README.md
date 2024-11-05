# jokes-delivery-service

A NestJS service for delivering jokes. This service provides endpoints for retrieving and moderating jokes.

## Overview

**jokes-delivery-service** is a backend service built with NestJS. It includes endpoints for delivering jokes.

## Features

- **Deliver Jokes**: Endpoint to retrieve jokes.
- **Submit Jokes**: Endpoint to submit new jokes.
- **Moderate Jokes**: Endpoint for moderators to review and approve submissions.

## Getting Started

### Prerequisites

- **Node.js** (v14.x.x or later)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/jokes-delivery-service.git
   cd jokes-delivery-service
   ```
###Configure environment variables
   ```bash
    DATABASE_HOST=localhost
    DATABASE_PORT=3306
    DATABASE_USER=root
    DATABASE_PASSWORD=yourpassword
    DATABASE_NAME=jokesdb
   ```
###Run the development server
```bash
  npm run start:dev
  # or
  yarn start:dev
```
### Scripts

Here is a list of useful scripts for development and production:

- `npm run build` or `yarn build`: Compile the application.
- `npm run start` or `yarn start`: Start the production server.
- `npm run start:dev` or `yarn start:dev`: Start the development server with hot reloading.
- `npm run start:debug` or `yarn start:debug`: Start the server in debug mode.
- `npm run lint` or `yarn lint`: Run ESLint checks.
- `npm run format` or `yarn format`: Format the codebase with Prettier.

Additional test and setup scripts:

- `npm run test` or `yarn test`: Run unit tests.
- `npm run test:watch` or `yarn test:watch`: Run tests in watch mode.
- `npm run test:cov` or `yarn test:cov`: Run tests with coverage.
- `npm run test:e2e` or `yarn test:e2e`: Run end-to-end tests.

### Tools and Technologies

This project leverages a variety of tools and technologies to support development, testing, and deployment.

#### AI Tools
- **ChatGPT**: Used for assistance in code generation, documentation, and troubleshooting.
- **Claude.ai**: Provides advanced AI capabilities for content generation and interaction.

#### Backend
- **Node.js**: JavaScript runtime environment for server-side code execution.
- **Express**: Web application framework for building RESTful APIs.
- **NestJS** (optional, if using in other services): A progressive Node.js framework for scalable and efficient backend services.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js, used for data management and schema validation.
- **JWT (JSON Web Token)**: Used for secure authentication and authorization.

#### Security
- **Helmet**: Middleware for securing HTTP headers.
- **Express Rate Limit**: Protects APIs by limiting repeated requests.
- **bcrypt.js**: For hashing passwords and securing sensitive data.

#### API Documentation
- **Swagger**: Provides interactive API documentation for easy testing and integration.

#### Development Tools
- **Nodemon**: Utility that automatically restarts the server on code changes.
- **ESLint**: Linter for identifying and fixing code issues.
- **Prettier**: Code formatter to maintain consistent code style.
- **Husky**: Git hooks manager to enforce checks before commits.

#### Environment Management
- **dotenv**: Loads environment variables from `.env` files, ensuring configurations are securely managed.

#### Database
- **MongoDB**: NoSQL database used for storing jokes and user data.
- **MySQL** (if applicable in other services): Relational database management system.

This combination of tools and technologies ensures a robust, secure, and scalable application architecture, suitable for modern web applications.
