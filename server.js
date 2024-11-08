const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;
const dataFilePath = path.join(__dirname, "incomeHeads.json");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Endpoint to handle form submission
app.post("/addIncomeHead", (req, res) => {
  const newIncomeHead = req.body.newIncomeHead;
  const description = req.body.description;

  if (newIncomeHead && description) {
    fs.readFile(dataFilePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading data file:", err);
        return res.status(500).send("Internal Server Error");
      }

      let incomeHeads = [];
      if (data) {
        incomeHeads = JSON.parse(data);
      }

      incomeHeads.push({ newIncomeHead, description });

      fs.writeFile(
        dataFilePath,
        JSON.stringify(incomeHeads, null, 2),
        (err) => {
          if (err) {
            console.error("Error writing to data file:", err);
            return res.status(500).send("Internal Server Error");
          }

          res.send("New income head added successfully!");
        }
      );
    });
  } else {
    res.status(400).send("Please fill out all fields.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
