const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TaskSchema = new Schema ({
    name: {
        type: String, 
        required: [true, 'must provide a name'], 
        trim: true, 
        maxlength:[20, "name can't be more than 20 characters"]
    },
    completed: {
        type : Boolean, 
        default: false
    }
})

const task = mongoose.model('Task', TaskSchema)

module.exports = task