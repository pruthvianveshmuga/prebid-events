const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const { insertEvent } = require("./utils");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/api", async (req, res) => {
  const { event: type, ...data } = req.body;
  let insertedRows = await insertEvent({ type, data });
  res.json(insertedRows[0]);
});

app.listen(port, () => {
  console.log(`Event server listening on port ${port}`);
});
