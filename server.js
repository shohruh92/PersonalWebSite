const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const port = process.env.PORT || 5505;
const path = require('path');
// router.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// load models 
const Todo = require('./models/ToDo');

// connect to MongoDB
mongoose.connect(keys.MONGO_URI)
.then(() => {
    console.log('MongoDB connected..')
})
.catch((err) => {
    console.log(err)
})
if (process.env.NODE_ENV == 'production') {
    // static file == html, css, js
    app.use(express.static('build'))
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'build','index.html'))
    })
}

// sending data
app.get('/data',(request,response) => {
    response.send({
        data:"Hello World how are you what are you doing"
    })
})

// receiving data
app.post('/todo',(req,res) => {
    console.log(req.body)
    new Todo({ name:req.body.data, date:new Date().toString() }).save()
    .then(() => {
        console.log('new to do item added')
    })
    .catch((err) => {
        console.log(err)
    })
    })
    app.post('/deleteItem',(req,res) => {
        Todo.findByIdAndDelete({_id:req.body._id})
        .then(() => {
            console.log('item deleted successfully..')
        })
        .catch((err) => {
            console.log(err)
        })
    })
    app.post('/editItem',(req,res) => {
        console.log(req.body)
        Todo.updateOne({_id:req.body.editingItem._id},{name:req.body.item})
        .then(() => {
            console.log('updated')
        })
        .catch((err) => {
            console.log(err)
        })
    })
    app.get('/allTodos',(req,res) => {
        Todo.find({})
        .then((todos) => {
            res.json(todos)
        })
        .catch(err => {
            console.log(err)
        })
    })


app.listen(port,(err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Server started on port ${port}`)
});