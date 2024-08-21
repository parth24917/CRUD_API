const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();
const app = express();
const connectdb = require('./config/dbconnection');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);
connectdb()


app.get("/api/contacts", (req,res) => 
{
    res.status(200).json({ message: "Get all contacts"});
})
app.listen(port, ()=> 
{
    console.log(`Server is running on port ${port}`);
});
