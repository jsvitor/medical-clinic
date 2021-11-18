const express = require('express');

const app = express();

app.use(express.json())

app.get("/medico", (request, response) => {
  return response.status(201).json({ "name": "Arlindo"})
})


app.listen(3333, () => console.log("server is running"))