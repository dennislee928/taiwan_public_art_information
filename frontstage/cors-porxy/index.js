const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001;

// Middleware to set CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// Route to fetch data from the target API
app.get("/api/publicart", async (req, res) => {
  try {
    const response = await axios.get(
      "https://publicart.taichung.gov.tw/_DataAction/"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`CORS proxy server running at http://localhost:${port}`);
});
