const mongoose = require('mongoose');

class Database {
    connection =  undefined;
    constructor(){
        var url = 'mongodb+srv://maicomgtbr:1999123@cluster0.rrpqtsf.mongodb.net/botBom?retryWrites=true&w=majority';
        this.connection = mongoose.createConnection(url);
        this.connection.model('Experiencia', new mongoose.Schema({
            id: String,
            userName: String,
            exp: Number,
            level: Number,
            group: String,
            groupName: String,
            nextLevelExp: Number
        }, {
            collection: 'WhatsApp'
        }));
    };

    getModel(name){
        return this.connection.model(name);
    }
}

const _db = new Database();

module.exports = _db;
