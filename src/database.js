const mongoose = require('mongoose');

async function connect(){
    await mongoose.connect('mongodb+srv://fernando:moonigth2000@proyecto.zei7l.mongodb.net/PruebasBD?retryWrites=true&w=majority',{
        useNewUrlParser: true
    });
    console.log('Database: Connected');
};

module.exports = { connect };
