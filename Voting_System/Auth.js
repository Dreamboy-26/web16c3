function authuser(req,res,next){
if(req.role==null){
    res.status(400).send()
}
}