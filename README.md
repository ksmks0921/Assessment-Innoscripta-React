# React Project Installation with Docker

This guide will help you install and set up a React project using Docker.

## Prerequisites

- Docker (version 24.0.1)
- Node.js (version 16.15.1)
- npm (version 8.11.0)

## Installation

1. Clone the project repository:

   ```bash
   git clone https://github.com/ksmks0921/Assessment-Innoscripta-React

2. Navigate to the project directory:

   ```bash
   cd Assessment-Innoscripta-React

   ```

3. Install project dependencies using npm:

   ```bash
   npm install

   ```

4. Start the Docker containers:

   ```bash
   docker-compose up -d

   ```

5. Build the React project

   ```bash
   docker-compose exec app npm run build

   ```

6. Visit http://127.0.0.1:5173 in your browser to access the React application.

   
## Additional Information

The Docker configuration is defined in the docker-compose.yml file.
The React application files are located in the app directory.
The development server can be started using npm run dev.

## Troubleshooting

If you encounter any issues, please ensure that you have the required software versions mentioned in the prerequisites section.
For more detailed troubleshooting steps, refer to the React and Docker documentations.
