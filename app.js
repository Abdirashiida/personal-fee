const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let month_salary = req.body.m_salry;
  let from_date = new Date(req.body.from_date);
  let to_date = new Date(req.body.to_date);
  let diff = Math.abs(from_date - to_date);
  let diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

  let targetDays= Math.floor( diffDays / 7)

  let workDay= diffDays - targetDays;

  console.log('  total days  '+diffDays)
  console.log('  target days '+targetDays)
  console.log('  work day  '+workDay)
  let year_salary = month_salary * 12;
  let perDay = month_salary / workDay;
  let perHour = perDay / 24;

  res.send(` month salary : ${month_salary}   <br>
  year salary : ${year_salary} <br>
  Date range: ${perDay}  <br>

  perHour :${perHour}`);
});

app.listen(3000, function () {
  console.log("server is lisening port 3000");
});
