const express = require('express');

const app = express();

app.get('/TestandoGit', (req, res) => {
    return res.json ({Hello: 'World'})
})

app.listen(3333);