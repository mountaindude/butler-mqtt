// Add dependencies
var restify = require('restify');


// Load code from sub modules
var globals = require('./globals');
var rest = require('./rest');


// ---------------------------------------------------
// Create restServer object
var restServer = restify.createServer({
    name: 'Butler-MQTT for Qlik Sense'
});

// Enable parsing of http parameters
restServer.use(restify.queryParser());

// Set up endpoints for REST server
restServer.get('/v2/mqttPublishMessage', rest.mqttPublishMessage.respondMQTTPublishMessage);



// ---------------------------------------------------
// Start REST server on port specified in config file
restServer.listen(globals.config.get('Butler-MQTT.restServerConfig.serverPort'), function() {
    console.info('REST server listening on %s', restServer.url);
});

