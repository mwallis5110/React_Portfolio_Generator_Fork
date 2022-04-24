const { Schema, model } = require("mongoose");


const skillsSchema = new Schema({
    languages: {
        type: String,
        required: false,
        trim: true,
    },
    programmingLanguages: {
        type: String,
        required: true,
        trim: true,
    },
    hardSkills: {
        type: String,
        required: true,
        trim: true,
    },
    softSkills: {
        type: String,
        required: true,
        trim: true,
    },

});




const Skills = model("Skills", skillsSchema);

module.exports = Skills;