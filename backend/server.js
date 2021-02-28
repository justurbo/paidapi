const express = require('express')
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Express here...')
});

app.use('/users/', require("./routes/usersRoute"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});