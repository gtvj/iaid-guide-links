const express = require('express');
const cors = require('cors');
const data = require('./refs_in_guides_backlinked');

const app = express();

app.use(cors());

app.get('/', (req, res, next) => {

    const body = [];

    Object.keys(data).forEach((key, index) => {
        body.push(`<a href="/${key}">${key}</a>&nbsp;`);
    });

    res.send(body.join(' '));

});

app.get('/:iaid', (req, res, next) => {

    if (data.hasOwnProperty(req.params.iaid)) {
        res.send(data[req.params.iaid]);
    } else {
        res.send({ response: `No guides related to ${req.params.iaid}` });
    }


});

app.listen(process.env.PORT || 3000, function () {
    console.log('CORS-enabled web server listening on port 80')
});