const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dsu_db_user:dsu83448@cluster0.jeiy7mp.mongodb.net/test")
  .then(() => {
    console.log("MongoDB connected");
    process.exit(0);
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });