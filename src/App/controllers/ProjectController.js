const express = require('express')
const authmid = require('../midware/auth');
const Agenda =require('../models/agenda');

const router = express.Router();

router.use(authmid);
//Busca todos
router.get('/', async (req,res)=>{
    try {
        const agenda = await Agenda.find().populate('usuario');

        return res.send({agenda});
    } catch (err) {
        return res.status(400).send({error: "Nao foi possivel achar agenda"})
    }
});
//busca 1
router.get('/:agendaId',async (req, res)=>{
    try {
        const agenda = await Agenda.findById(req.params.agendaId).populate('usuario');

        return res.send({agenda});
    } catch (err) {
        return res.status(400).send({error: "Nao foi possivel encontrar esta agenda"})
    }
});
//insere
router.post('/', async(req,res)=>{
    try {
        console.log(req);   
        const agenda = await Agenda.create({... req.body, usuario: req.userId});
        console.log(agenda)
        return res.send({agenda}); 
    } catch (err) {
        
        return res.status(400).send({error: "Nao foi possivel add nova agenda"})
    }
});

//apaga
router.delete('/:agendaId', async(req,res)=>{
    try {
        await Agenda.findByIdAndRemove(req.params.agendaId);

        return res.send();
    } catch (err) {
        return res.status(400).send({error: "Nao foi possivel deletar"})
    }
});

module.exports = app => app.use('/agenda', router);
