const express = require("express");
const cors = require("cors");

const itemsRoute = require("./routes/items");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/items", itemsRoute);

// Health check
app.get("/", (req, res) => {
  res.send("Items API is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
