import mongoose from "mongoose";
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }
    // better option to get time is using timestamps in schema options
    
}, { timestamps: true }); //will give created at and updated at field automatically

const Note = mongoose.model('Note', noteSchema);
export default Note;