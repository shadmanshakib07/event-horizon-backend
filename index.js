const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = "mongodb+srv://event_horizon:0lvvrMejiTM1SNFp@cluster0.mb5mgqx.mongodb.net/?retryWrites=true&w=majority";
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.j9nln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });





































async function run(){
    console.log("mew")
}






run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Event Horizon server is running -_-' )
})

app.listen(port, () => {
    console.log(`Listening at ${port}`)
})