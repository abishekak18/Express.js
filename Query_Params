import express from 'express';
var app = express();
var userNames = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 23 },
    { name: 'Jim', age: 27 },
    { name: 'Abi', age: 25 },
    { name: 'Devi', age: 23 },
    { name: 'Lav', age: 27 },
];
app.get('/api/users', function (req, res) {
    console.log(req.query);
    const{query: {filter,value},} = req;
    if(!filter && !value){
        return res.send(userNames);
    }
    if(filter && value){
        return res.send(
            userNames.filter((user)=> user[filter].includes(value))
        )
    }
    res.send(userNames);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});