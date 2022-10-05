const checkUser = (req, res, next)=>{
 req.body.email == 'joshua'? next() : res.send ('Invalid email')
}

const checkEmail= (req, res, next)=>{
    let username = req.body.username;
    if (username == 'osarodion') {
        next();
    }else{
        res.send('Invalid username')
    }
}


module.exports = {checkUser, checkEmail}