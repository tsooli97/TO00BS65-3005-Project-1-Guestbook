const express = require("express");
const app = express();
const guestbookRouter = require("./routes/guestbookRouter");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", guestbookRouter);

app.listen(3000, () => {
  console.log("Listening in on port 3000");
});
