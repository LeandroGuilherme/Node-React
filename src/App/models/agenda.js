const mongoose = require('../../database');

const AgendaSchema = new mongoose.Schema({
    titulo:{
        type: String, 
        require: true,
    },
    descricao:{
        type: String, 
        require: true,
    },
    data:{
        type:String,
        require: true,
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    createdAt:{
        type:Date,
        default: Date.now,
    },
});


const Agenda = mongoose.model('Agenda', AgendaSchema);

module.exports = Agenda;