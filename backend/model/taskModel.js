const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        name:{
            type: String,
             required:[true, "Please add a task"]
        },
        completed:{
            type:Boolean,
            required:true,
            default:false
        }
    },
    {
        timestamps:true
    }
)

taskSchema.statics.create = function(name){
    const task = new this (name)
    return task.save()
}
const Task = mongoose.model("Task", taskSchema)

module.exports = Task;
