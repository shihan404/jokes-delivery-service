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

