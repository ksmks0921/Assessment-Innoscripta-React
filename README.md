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

   ```

2. Navigate to the project directory:

   ```bash
   cd Assessment-Innoscripta-React

   ```

3. Install project dependencies using docker:

   ```bash
   docker build -t react-app .

   ```

4. Run the Docker container:

   ```bash
   docker run -d -p 127.0.0.1:5173:5173 react-app

   ```

5. Visit http://127.0.0.1:5173 in your browser to access the React application.

## Troubleshooting

If you encounter any issues, please ensure that you have the required software versions mentioned in the prerequisites section.
For more detailed troubleshooting steps, refer to the React and Docker documentations.
