const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const handlers = require('./handlers');
const { prepareAPIGatewayEvent } = require('@amitk-iitropar/job-node_common');
const CONSTANT = require('./constants/constant');

const defaultPort = CONSTANT.defaultPort;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ strict: true }));
app.use(cors());

app.all("*", handleAPIRequest);

exports.startExpressApp = (port) => {

    app.listen(port ? port : defaultPort, () => {
        console.log(`Express App started listning on port ${port ? port : defaultPort}`)
    })

}

async function handleAPIRequest(req, res){
    let event = prepareAPIGatewayEvent(req);
    console.log('event.apiPath ', event.apiPath)
    let result = await handlers.handler(event);
    //res.status(200).json({});
    res.status(result.statusCode).json(result.body);
}