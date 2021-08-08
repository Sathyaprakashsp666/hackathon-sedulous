const mongoose = require("mongoose")
const connect = () => {
    return mongoose.connect("mongodb+srv://Guru2021:Guru2021@cluster0.fzai9.mongodb.net/guru?retryWrites=true&w=majority", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}

module.exports = connect