const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const users = [{ username: "testuser", password: "password123" }]; // Dummy users

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
