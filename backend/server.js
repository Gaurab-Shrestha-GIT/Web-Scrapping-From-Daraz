const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes/commonRoute"));

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
