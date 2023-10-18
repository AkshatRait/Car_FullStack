//connect mongoose to the DATABASE
// later when we use mongoose somewhere else, it will already be connected


const mongoose = require('mongoose');


let connectionString = `mongodb+srv://akshatrait:${process.env.MONGO_PASS}@cluster0.gwsjpl1.mongodb.net/Vehicles?retryWrites=true&w=majority`
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', ()=> {
    console.log('connected to DATABASE'); 
  });
