const express=require('express');
const cors =require('cors')
const bodyParser =require('body-parser');
const userRoutes = require("./")
const app=express();


app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.listen(8080, ()=>{
    console.log("working");
});

let Users=[];

app.get("/",(req,res)=>{
 res.send(Users);

})
app.get("/getdata",(req,res)=>{
    res.send(Users)
})

app.post("/create",(req,res)=>{
    const Reponame=req.body.Reponame
      const Status=req.body.Status
      const QueuedAt=req.body.QueuedAt
      const ScanningAt =req.body.ScanningAt
      const FinishedAt =req.body.FinishedAt
      const Ruleid =req.body.Ruleid
      const Description =req.body.Description
      const Severity =req.body.Severity
      const Pathname =req.body.Pathname
      
      Users.push({
        Reponame:Reponame,
        Status:Status,
        QueuedAt:QueuedAt,
        ScanningAt:ScanningAt,
        FinishedAt:FinishedAt,
        Ruleid:Ruleid,
        Description:Description,
        Severity:Severity,
        Pathname:Pathname
    })
    
res.send(`users added`);
res.send(Users);
})



