const mongoose = require('mongoose');

const meubleSchema = new mongoose.Schema( {
        
        name:{
            type: String,
            required: true
        },
        type :{
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        materials:{
            type: Array,
            required: true
        },
        colors:{
            type: Array,
            required: true
        },
        size:{
            type: String,
            required: true
        },
        images:{
            type: Array,
            required: true
        }

      });

module.exports = mongoose.model("Meuble",meubleSchema);