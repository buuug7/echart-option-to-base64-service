const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");

const echarts = require("node-echarts-canvas");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParse.json());

app.get("/", (req, res) => {
  res.json({
    data: "Hello world",
  });
});

app.post("/echarts-option-to-base64", (req, res) => {
  console.log("body", req.body);
  const body = req.body;
  const config = {
    width: body.width || 500, // Image width, type is number.
    height: body.height || 500, // Image height, type is number.
    option: body.option, // Echarts configuration, type is Object.
    //If the path  is not set, return the Buffer of image.
    path: "", // Path is filepath of the image which will be created.
    enableAutoDispose: true, //Enable auto-dispose echarts after the image is created.
  };

  const bufferData = echarts(config);
  const base64 = "data:image/png;base64," + bufferData.toString("base64");
  console.log('base64', base64)
  res.json({
    base64: base64,
  });
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
