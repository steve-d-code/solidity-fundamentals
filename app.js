const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
    res.send("UPDATE 070222 5:47: <a href='public/index.html'>index</a>");
});


const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Stan the solidity");
});
