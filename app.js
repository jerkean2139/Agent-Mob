// Import necessary modules
import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";

// Import the Home component
import Home from "./src/pages/Home";

// Create an Express app
const app = express();
const PORT = 3000;

// Serve static files (e.g., CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// Define a route for the home page
app.get("/", (req, res) => {
  const reactApp = ReactDOMServer.renderToString(<Home />);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Agent Mob</title>
      <link rel="stylesheet" href="/styles.css"> <!-- Assuming a public/styles.css exists -->
    </head>
    <body>
      <div id="root">${reactApp}</div>
    </body>
    </html>
  `;

  res.send(html);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
