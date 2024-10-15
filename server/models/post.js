// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
// const PostSchema = new Schema({
//     title: {
//         type: String,
//         required: true 
//     },
//     body: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     },
//     updatedAt: {
//         type: Date,
//         default: Date.now
//     },
// });

// module.exports = mongoose.model('Post', PostSchema)

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
    body: {
        type: String,
        required: true
    },
}, {
    timestamps: true  // Automatically adds `createdAt` and `updatedAt` fields
});

module.exports = mongoose.model('Post', PostSchema);
