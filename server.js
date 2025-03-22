const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; // Use PORT from environment or default to 5000

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
    console.log("Login API hit");
    console.log("Received Username:", req.body.username);
    console.log("Received Password:", req.body.password);

    res.status(200).json({ message: "Login received, redirecting to error page." });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
