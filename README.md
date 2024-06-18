# Redirect Request from Host to WSL Subsystem

This project is an Express.js application designed to redirect HTTP requests from the host to a specified WSL (Windows Subsystem for Linux) subsystem. It handles GET, POST, PUT, and DELETE requests and redirects them using Axios to the target WSL subsystem.

## Prerequisites 

- Node.js and npm installed
- Another Server reachable from localhost, WSL in this case.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/plNav/WSL_Proxy.git
    ```
    ```
    cd WSL_Proxy
    ```

2. Install dependencies:
    ```node
    npm install
    ```

## Configuration

Update the `BASE_URL` constant in `index.js` with the base URL of your WSL subsystem:
```javascript
const BASE_URL = 'http://<wsl-ip-address>:<port>';
```
Update the `REDIRECT_PATH` to capture all the endpoints from origin;
```javascript
const REDIRECT_PATH = 'your-project-api-base-path'
```
* REDIRECT_PATH not needed if you like to redirect all the request.

## Usage
Start the server:

```sh
node index.js
```
or
```sh
npm start
```

The server will start running on http://localhost:8080.

## API Endpoints
The following endpoints are available for redirecting requests:

- GET /${REDIRECT_PATH}/*
- POST /${REDIRECT_PATH}/*
- PUT /${REDIRECT_PATH}/*
- DELETE /${REDIRECT_PATH}/*

* If no `REDIRECT_PATH` needed just use `GET /*` `POST /*` `PUT /*` `DELETE/*`

### Example
For example, if you send a GET request to <br>
`http://localhost:8080/REDIRECT_PATH/some-endpoint`,<br>
the server will redirect it to <br>
`http://BASE_URL/REDIRECT_PATH/some-endpoint`

### Logging
The application provides console logging with colored output for easier debugging:

- Endpoint accessed: Cyan
- Errors: Red
- Server start: Magenta
- Successful response: Green

#### License
Feel free to use or improve via pull request!
