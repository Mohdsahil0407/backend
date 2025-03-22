const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Allow requests from your frontend domain
app.use(cors({
    origin: "*", // You can replace "*" with your frontend URL for better security
    methods: "GET,POST",
    allowedHeaders: "Content-Type"
}));

// ✅ Ensure backend can parse JSON requests
app.use(express.json());

app.post("/login", (req, res) => {
    console.log("Login API hit");
    console.log("Received data:", req.body); // ✅ Log request body

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Missing username or password" });
    }

    console.log("Username:", username, "Password:", password);

    res.status(200).json({ message: "Login received" });
});

// ✅ Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
