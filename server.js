const express = require("express"); // Import Express
const app = express(); // Create an Express app

app.use(express.json()); // Middleware to parse JSON data

// API endpoint to receive login data
app.post("/login", (req, res) => {
    const { username, password } = req.body; // Extract username & password from request

    console.log("Received Username:", username);
    console.log("Received Password:", password);

    // You can add authentication logic here (e.g., check in a database)
    
    res.status(200).json({ message: "Login received, redirecting to error page." });
});

// Start the backend server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
