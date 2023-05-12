const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST } = process.env;

// const { DB_HOST } = require("./config");

// const DB_HOST =
//   "mongodb+srv://Yurii:pawn0nepenthe@cluster0.q5at4ar.mongodb.net/?retryWrites=true&w=majority";

// mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
