const express = require('express');
const app = express();
const port = 8080;
const axios = require('axios');

// Constants
const BASE_URL = 'http://172.17.78.15:8080';
const REDIRECT_PATH = 'baccus';

// Middleware to parse JSON body
app.use(express.json({ limit: '10mb' }));

// Console colors
const colorEndpoint = '\x1b[36m%s\x1b[0m';
const colorError = '\x1b[31m%s\x1b[0m';
const colorStart = '\x1b[35m%s\x1b[0m';
const colorSuccess = '\x1b[32m%s\x1b[0m';

// Generic function to handle requests and redirect using Axios
const handleRequest = (req, res) => {
  console.log(colorEndpoint, `${req.originalUrl}`);
  const url = `${BASE_URL}${req.originalUrl}`;
  
  axios({
    method: req.method,
    url,
    data: req.body,
    headers: req.headers,
  })
    .then(response => {
      console.error(colorSuccess, `OK\n`);
      res.send(response.data);
    })
    .catch(error => {
      console.error(colorError, `${error.message}\n`);
      res.status(error.response ? error.response.status : 500).send(error.message);
    });
};

app.get(`/${REDIRECT_PATH}/*`, handleRequest);
app.post(`/${REDIRECT_PATH}/*`, handleRequest);
app.put(`/${REDIRECT_PATH}/*`, handleRequest);
app.delete(`/${REDIRECT_PATH}/*`, handleRequest);

// Start the server
app.listen(port, () => {
  console.log(colorStart, `Server is running on http://localhost:${port}\n`);
});
