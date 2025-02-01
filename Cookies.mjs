const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser("mySecretKey"));   //Middleware to parse signed cookies

app.get("/set-cookie", (req, res) => {
  res.cookie("username", "Abishek", { maxAge: 900000, httpOnly: true });   //Setting cookie with name, value and options
  res.send("Cookie has been set");
});

app.get("/get-cookie", (req, res) => {          //Reading cookies
  res.send(req.cookies);
});

app.get("/delete-cookie", (req, res) => {
  res.clearCookie("username");  //Deleting cookie
  res.send("Cookie deleted");
});

app.get("/set-signed-cookie", (req, res) => {
  res.cookie("secureUser", "Abishek", { signed: true });    //Setting signed cookie
  res.send("Signed cookie set");
});

app.get("/get-signed-cookie", (req, res) => {
  res.send(req.signedCookies);
});

app.listen(3000, () => console.log("Server running on port 3000"));
