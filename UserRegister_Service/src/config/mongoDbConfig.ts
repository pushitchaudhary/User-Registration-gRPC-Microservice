const mongoose = require('mongoose')

export const databaseConnection = async ()=>{
    await mongoose.connect('mongodb+srv://pushitcoc:pushit@cluster0.t86tvbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }).then(() => {
        console.log('Connected to MongoDB successfully 🔥');
    }).catch((err: any) => {
        console.error('MongoDB Connection Error:', err);
    })
}