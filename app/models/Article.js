const mongoose = require('mongoose');

//create a referance to the Schema
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title:{
        type: String,
        required:false
    },
    link:{
        type: String,
        required : false
    },

    imageSrc:{
        type: String,
        required: false
    }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;