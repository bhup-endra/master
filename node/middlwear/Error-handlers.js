//middleware api for handling error
const {CustomApiError} =require('..CustomError')
const  ErrorHandlerMiddleware=(err,req,res,next)=>{
    if (err instanceof CustomApiError){
        return res.status(err.statusCode).json({msg:err.message})
    }
        return res.status(500).json({msg:'somthing went wrong , please try again...'})}
        model.exports= ErrorHandlerMiddleware