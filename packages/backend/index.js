const app = require("express")();
app.get("*", (req, res) => {
  console.log("DOING LOG STUFF");
  res.send("Hello from Express.js!");
});
app.listen();
