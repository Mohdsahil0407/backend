const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Ensure JSON parsing is enabled

app.post("/login", (req, res) => {
    console.log("Login API hit");
    
    // Ensure body is received correctly
    const { username, password } = req.body;

    if (!username || !password) {
        console.log("❌ No username or password received!");
        return res.status(400).json({ error: "Missing username or password" });
    }

    console.log("✅ Received Username:", username);
    console.log("✅ Received Password:", password);

    res.status(200).json({ message: "Login received, redirecting to error page." });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
