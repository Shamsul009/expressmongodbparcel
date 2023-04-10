const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema(
    {
        username:{type: String , unique:true , required:true},
        createAt:{type: Date , required:true}
    }

);
//var User = mongoose.model('User',UserSchema);

module.exports = mongoose.model('User', UserSchema);