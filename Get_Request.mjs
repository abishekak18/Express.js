import express from 'express';
var app = express();
app.get('/api/user', function (req, res) {
    res.send([
        { name: 'John', age: 25 },
        { name: 'Jane', age: 23 },
        { name: 'Jim', age: 27 },
    ]);
});
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});