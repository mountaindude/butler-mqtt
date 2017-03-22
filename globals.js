var mqtt = require('mqtt');
var config = require('config');


// ------------------------------------
// Create MQTT client object and connect to MQTT broker
var mqttClient = mqtt.connect('mqtt://' + config.get('Butler-MQTT.mqttConfig.brokerIP'));
/*
Following might be needed for conecting to older Mosquitto versions
var mqttClient  = mqtt.connect('mqtt://<IP of MQTT server>', {
  protocolId: 'MQIsdp',
  protocolVersion: 3
});
*/


module.exports = {
  config,
  mqttClient
};
