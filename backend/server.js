const express = require("express");
const app = express();

app.get("/api/products", (req, res) => {
  res.send({ message: "Hello, world!" });
});

const port = 6000;
app.listen(port, () => {
  console.log(`listening on port${port}`);
});
