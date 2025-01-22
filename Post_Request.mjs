import express from 'express';
const app = express();

const userNames = [
    { id:1,name: 'Jim', age: 27 },
    { id:2,name: 'Abi', age: 25 },
    { id:3,name: 'Devi', age: 23 },
    { id:4,name: 'Lav', age: 27 },
];

app.use(express.json());

app.get('/api/users', function (req, res) {
    console.log(req.query);
    const { query: { filter, value } } = req;
    if (!filter && !value) {
        return res.send(userNames);
    }
    if (filter && value) {
        return res.send(
            userNames.filter((user) => user[filter].toString().includes(value))
        );
    }
    res.send(userNames);
});


//Thunder Client la POST request use pannitu Body la poitu json file change panna change aagum
app.post("/api/users", (req, res) => {
    const {body} = req;
    const newUser = {id:userNames[userNames.length -1].id+1, ...body};
    userNames.push(newUser);
    return res.status(201).send(newUser);
});
 
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});