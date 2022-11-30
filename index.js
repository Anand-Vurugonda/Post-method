const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=5000
app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())
app.get("/",(req,res)=>{
	res.send("Server is running")
})
app.post("/newData",(req,res)=>{
	//const name=req.bopdy.name,age=req.body.age
	const {name,password,course,gender}=req.body;
	console.log(req.body)
	console.log(name,password,course,gender)
	res.send("addes")
})
app.listen(port,()=>console.log("server is running on port"))