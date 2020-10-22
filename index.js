const express = require("express");
const generatePassword = require("password-generator");
const path = require("path");

const app = express();

// serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// put all API endpoints under "/api"
app.get("/api/passwords", (req, res) => {
  const count = 5;

  // generate five example passwords (= count)
  const passwords = Array.from(Array(count).keys()).map((i) => {
    generatePassword(12, false);
  });

  // return passwords in json format
  res.json(passwords)
});

// add 'catch-all': for any request that does not match one above,
// send back React's index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`Password generator listening on ${port}`);
