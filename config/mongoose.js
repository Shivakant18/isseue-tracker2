const mongoose = require('mongoose');
const DB = 'mongodb+srv://shiva:Shiva1122@cluster0.jlcxm1s.mongodb.net/issueDb?retryWrites=true&w=majority';
mongoose.connect(DB).then(() => {console.log('connection sucessful..');
}).catch((err) => console.log('no connection..'));


// const mongoose = require('mongoose');
// const url = 'mongodb://0.0.0.0:27017/db';
// // mongoose.connect('url') 
// mongoose.connect(url);
// const db=mongoose.connection;

// //If any Error then Getting this Line
// db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


// db.once('open',()=>{
//     console.log("Connected to Database :: MongoDB ")
// });

// module.exports=db;  //Exports db