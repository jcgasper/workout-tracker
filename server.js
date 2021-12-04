//REQUIRE
const express = require("express");
const mongoose = require("mongoose");
//changed to port 3001, as I have issues connecting to 3000 in past.
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true 
});
// ADD ROUTES  
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
