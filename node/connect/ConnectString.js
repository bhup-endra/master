const mongoose=require('mongoose')

const connectString='mongodb+srv://bhupendra:project123@bhupendraproject.hnh4n.mongodb.net/FirstDatabase?retryWrites=true&w=majority'
//url for  connectstring pass from the .env varisrable pass from the app.js
const connectDB=(url)=>{

  return mongoose.connect(connectString)
}
module.exports=connectDB;