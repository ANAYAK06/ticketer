var db = require('../config/connection')

module.exports={
    createIssue : (issues,callback)=>{
        console.log(issues)
        db.get().collection('newissue').insertOne(issues).then((data)=>{
            callback(true)
        })

    }
}