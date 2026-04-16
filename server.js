require("dotenv").config()
const express = require("express")
const app = require("./src/app")
const cors = require('cors')
const path = require("path");

const emailRouter = require("./routes/emailsender.routes")
app.use(cors())
app.use(express.static(path.join(__dirname, "public")));
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
const port = 3030;
app.use("/api" , emailRouter)



app.listen(port,()=>{
    console.log(`Server is listening to the port ${port}`)
});