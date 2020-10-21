const express = require("express");
const path = require("path");
const generatePassword = require("password-generator");

const app = express();

// serve static files from the React app:
app.use(express.static(path.join(__dirname, "client/build")));

// put all API endpoints under '/api'
app.get("/api/passwords", (req, res) => {
  const count = 5;

  // generate examples
  const passwords = Array.from(Array(count).keys()).map((i) =>
    generatePassword(12, false)
  );
  // return in json format
  res.json(passwords)

  console.log(`Sent ${count} passwords`);
});

// catchall handler: for any request that does not match the above,
// send back React's index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`Password generator listening on ${port}`);
