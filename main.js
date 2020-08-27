const express = require('express')
const AWS = require("aws-sdk");
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(bodyParser.text({ type: "*/*" }));

app.get('/', (req, res) => {
    res.send('OK');
});

app.post('/', async(req, res, next) => {
    let sns = new AWS.SNS();
    let subject = req.query && req.query.subject ? req.query.subject : 'Subject not set';
    let params = {
        Message: req.body || 'empty',
        Subject: subject,
        TopicArn: process.env.SNS_TOPIC
    };
    try {
        console.log(params);
        let data = await sns.publish(params).promise();
        console.log(data);
        res.json(data)
    } catch (error) {
        // Passes errors into the error handler
        return next(error)
    }
});

// AWS.config.update({ region: 'eu-central-1' });
app.listen(port, () => {
    console.log(`SNS forwarder app listening at http://localhost:${port}`)
});
