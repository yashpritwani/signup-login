var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://CareerGuidance:Career2904%40@cluster0.tnxn0.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
var conn = mongoose.connection;
var userSchema = new mongoose.Schema({
    name: {type:String,
        required: true,
        index: {
            unique: true,
        },},
    email: {type:String,
        required: true,
        index: {
            unique: true,
        },},
    cno: Number,
    dob: Number,
    password: {type:String,
        required: true,
    },
    cpassword: {type:String,
        required: true,
    },
    // date: {
    //     default: Date.now() }
});
var userdata = mongoose.model('UserData', userSchema);
module.exports = userdata;
