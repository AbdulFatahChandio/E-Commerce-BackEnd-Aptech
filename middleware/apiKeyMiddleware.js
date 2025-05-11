const API_KEY=new Set(["Abcd12345678!*"])

const apiKeyMiddleware=(req,res,next)=>{

    const api_key=req.header("x-api-key")

    if (!api_key||!API_KEY.has(api_key))
    {
        return res.status(403).json(
            {
                "message":"FORBIDDEN ACCESS INVALID API KEY"
            }
        )
     
    }
    else
    {
        next()
    }
}

export default apiKeyMiddleware