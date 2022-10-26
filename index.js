const express = require('express');
const cors = require('cors');

const courses = require('./data/courses.json')

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Hello from world')
})


app.get('/courses', (req, res) =>{
    res.send(courses);
})

app.get('/courses/:category', (req, res) => {
    const category = req.params.category;
    const getEveryCategory = courses.find((course) => course.category == category);
    if(!getEveryCategory){
        res.send("This data is not available")
    }
    res.send(getEveryCategory);
});


app.listen(port, () =>{
    console.log(`This project is listing on port: ${port}`);
})