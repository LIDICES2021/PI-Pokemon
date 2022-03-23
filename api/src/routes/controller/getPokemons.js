const axios = require('axios');

const { Pokemon, Tipo} = require('../../../src/db');




const getPokemon = async (req, res, next) => {

    try{









    }catch(err){
        return res.status(404).json({err})
    }
}



module.exports = {getPokemon}