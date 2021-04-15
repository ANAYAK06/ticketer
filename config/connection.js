const mongoClient = require('mongodb').MongoClient
const state={
    db:null
}

module.exports.connect = function(done){
    const url = 'mongodb+srv://anoop149:Anoop62@cluster0.qzlqn.mongodb.net/Issue?retryWrites=true&w=majority'
    const dbname = 'Issue'

    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)
        done()
    })

    
    
}
module.exports.get = function(){
    return state.db
}