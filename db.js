const mangoose = require('mongoose')

mangoose.connect('mongodb+srv://kalyan:mydbconnect@kalyancluster.tz12r.mongodb.net/mydatabase?retryWrites=true&w=majority',
{useUnifiedTopology: true,
useNewUrlParser : true})
.then(()=> console.log("MongoDB is connected from Atlas(Cloud)..."))
.catch(err => console.log(err))