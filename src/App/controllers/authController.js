const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');


const authConfig = require("../../config/auth")

const router = express.Router();

function gerarToken(params = {}){
    return jwt.sign(params,authConfig.secret,{
        expiresIn: 86400,
    });
}

router.post('/register', async(req,res)=>{
    const {email} = req.body;

    try{
        if(await User.findOne({email})){
            return res.status(400).send({Error: 'Usuario ja existe'});
        }

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({user});
    }catch(err){
        return res.status(400).send({error: 'falha ao registrar'});
    }
});

router.post('/autenticar', async (req, res) =>{
    const {login, password} = req.body;

    const user = await User.findOne({login}).select('+password')

    if(!user){
        return res.status(400).send({error: "Login incorreto"});
    }

    if(password != user.password){
        return res.status(400).send({error: "senha incorreta"});
    }
    user.password = undefined;

    res.send({
        user, 
        token: gerarToken({id: user.id}),
    });
});


module.exports = app =>app.use('/auth',router);