import express from 'express';
var app = express();
var userNames = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 23 },
    { name: 'Jim', age: 27 },
];
app.get('/api/user', function (req, res) {
    res.send(userNames);
});
app.get('/api/user/:name', function (req, res) {
    var user = userNames.find(function (user) {
        return user.name === req.params.name;
    });
    if (user) {
        res.send(user);
    } else {
        res.status(404).send('User not found');
    }
});
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});