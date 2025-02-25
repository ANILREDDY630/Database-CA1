import express from "express";
import "dotenv/config";
import restanurent from "./restaurantModel.js";
import menuitems from "./itemsModel.js";

const app=express();
const port=process.env.port;

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Api is working");
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});