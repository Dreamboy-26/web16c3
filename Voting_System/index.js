const express =require("express");
const app=express();

const users =require("./db.json")
const fs=require("fs")

app.use(express.json())

const PORT=process.env.PORT ||8080

app.get("/",(req,res)=>{
    fs.readFile("./db.json", {encoding:"utf-8"},(error,data)=>{
        res.setHeader("Content-Type","application/json")
        res.send(data)
    })
  
})

app.post("/user/create",(req,res)=>{
    fs.readFile("./db.json", {encoding:"utf-8"},(error,data)=>{
        res.setHeader("Content-Type","application/json")

        const parsed=JSON.parse(data);
        parsed.users=[...parsed.users,req.body]


        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.status(201).send("posted")
        })
    })
   
    
})





app.listen(PORT,()=>{
    console.log("server stated on http://localhost:8080")
})