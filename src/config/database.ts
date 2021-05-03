import mongoose from 'mongoose';

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.rju8o.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri || 'test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));