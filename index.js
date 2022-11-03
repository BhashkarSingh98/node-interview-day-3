const express=require("express");
const cors=require("cors");
const {sum,sub,mul}=require("./module")

const app=express();

app.use(cors());

const middleware=(req,res,next)=>{
    if(!req.query.age){
        res.send("please provide age in URL, example-(http://localhost:8080/about?age=18) and you should above 18. ")
    }
    else if(req.query.age<18){
        res.send("you are not eligible ")
    }
    else{

        next();
        
    }
}

app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/about",middleware,(req,res)=>{
    res.send("about page")
})

app.listen(8080,()=>{
    console.log("server started 8080");
})


console.log(sum(5,9));
console.log(sub(15,9));
console.log(mul(5,5));