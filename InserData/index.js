const knex = require('./../connecation/connecation')
const {generateAccessToken,authenticateToken}=require('./../Auth/index')

exports.InserData = (req, res) => {
    console.log(req.body);
    knex.select('*').from('ram').where('email', req.body.email).then((data) => {
        if (data.length < 1) {
            knex('ram').insert({ name: req.body.name, email: req.body.email, password: req.body.password}).then((data) => {
                res.send({ msg: 'the data is insert' })
            }).catch((err) => {
                res.send({ msg: 'emali is allredy inserted' })
            })
        }
        else {
            res.send("data already exist")
        }
    })
}



exports.Delete = (req, res) => {
    knex.select('*').from('ram').where({ email: req.body.email }).del().then((data) => {
        res.send('data is delete')
    }).catch(() => {
        res.send('data is not delete')
    })
}


exports.updatedatabyid =(req, res) => {
    console.log(req.data);
    knex.select('*').from('ram').where({ id: req.params.id }).update({name:req.body.name,password:req.body.password,email:req.body.email}).then((data) => {
        res.json({message:'your data update', data1:data});
    }).catch(() => {
        res.send('yor are data is not update')
    })
}

exports.login=(req,res)=>{

    knex.select('*').from('ram').where({email:req.body.email,password:req.body.password}).then((data)=>{
        let token=generateAccessToken({email:req.body.email})
        res.cookie("token",token).json({message:"login succesfuly"})
        console.log(token);
    }).catch((err)=>{
        res.send('Ivalid email or password')
    })
}