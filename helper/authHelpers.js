import jwt from 'jsonwebtoken'

export const generateToken = (user)=>{
    //header - payload - signature = JWT token
    // |         |           | 
    // |         |           |
    // created   see const   created by secret
    // by jwt
    // itself
    //sub = user._id --> assign user id to sub claim

    const payload = {sub:user._id}

    return jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:'1h'
    })
}