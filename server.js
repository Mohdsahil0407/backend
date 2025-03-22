const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    console.log("Received Login Request:");
    console.log("Username:", username);
    console.log("Password:", password);

    if (username === "testuser" && password === "password123") {
        res.json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
