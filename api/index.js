const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 8080;
const data = require('./fakeapi')


app.use(cors());
app.use(express.json());


app.get('/', (req,res) => {
    res.send({
        data
    })
})

app.get('/user/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    if (!name) {
        res.status(418).send({ message: 'We need a username! '})
    }

    res.send({
        user: `This is ${name}, who is user ${id}.`
    })
})

app.get('/tshirt', (req,res) => {
res.status(200).send({
    tshirt: '👕',
    size: 'large'
})
})

// app.get('/user/:id', (req,res) => {
//     const {id} = req.params;

//     res.send({
//         user:
//     })
// })

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)