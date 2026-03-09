const express = require("express");

const app = express();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.use("/api", userRoutes);


app.get("/", (req, res) => {
    res.send("REST API is Running");
});


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});