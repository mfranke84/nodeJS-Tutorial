const express = require ('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/'))

app.post('/save-task', function(req, res){
    const taskObject = req.body
    // connect database
    // saves new task in database
    console.log("Saved task: ", taskObject.task)
    res.send({
        savedTask: taskObject.task
    })
})

app.get('/get-tasks', function(req, res){
    const tasks = ["Bett machen", "Kaffee kochen", "Zähne putzen"]
    res.send({ tasks: tasks})
})

app.listen(3000, function(){
    console.log("app listening on port 3000")
});