const express=require("express");
const app=express();
app.use(express.json());
const todolist=[];
app.get('/',function(req,res){
       res.json({
        todolist,
       })
})

app.post("/", function (req, res) {
    const { task } = req.body;
    todolist.push(task);
    res.json({
        msg: "Task added successfully!",
        todolist,
    });
});
app.delete("/",function(req,res){
  const {index}=req.body;
  if (index >= 0 && index < todolist.length) {
    todolist.splice(index, 1); 
  }
  res.json({
    msg:"task deleted successfully",
    todolist,
  })
})
app.put("/",function(req,res){
    const {index}=req.body;
    const {updated_task}=req.body;
    if(index>=0 && index<todolist.length){
        todolist[index]=updated_task;
        res.json({
            msg:"task updated successfully",
            todolist,
        })
    }
})

app.listen(3000);