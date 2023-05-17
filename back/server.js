const express = require('express');
const dbConnection = require('./db/config');
const dotenv = require('dotenv')
const cors = require('cors')
const task = require("./db/Users")
const app = express();
app.use(express.json());
dbConnection();
dotenv.config();
app.use(cors());





// posting data in MOngoose 
app.post("/task",async(req, resp)=>{
    let Task = new task(req.body)    
    let result = await Task.save();
    resp.send(result)
})

// getting data from mongodb
app.get("/task", async(req, res)=>{
    let uData =  await task.find();
    if(uData.length>0){
        res.send(uData)
    }else{
        // res.send({msg:"No record available lol!"})
        console.log('no daata')
    }
})

// delete data

app.delete("/task/:id",async(req,res)=>{    

    let delTask = await task.deleteOne({_id: req.params.id})
    res.send(delTask)

})


const PORT = process.env.port || 5000

app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT} in ${process.env.App_Mod}`)
})
