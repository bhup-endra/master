const mongoose= require('mongoose')

//schema to access document in MongoDB
const TaskSchema =  new mongoose.schema({
    name:{
        type:String,
        required:[true,"most provided name"],//ture means mostly true
        trim:true,
        maxLength:[20,'name cannot be more than 20 character'],
        }, //vallidaters are validdating the name
    completed:{
       type: Boolean,
    default:false,// false means not completed
        }
})
//exports our mongoose deel to use it in controllers
module.exports=mongoose.model('Task', TaskSchema)


