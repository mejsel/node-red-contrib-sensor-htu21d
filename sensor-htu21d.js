module.exports = function(RED) {

  function Htu21dNode(config) {

    RED.nodes.createNode(this, config);
    var node = this;

    node.on('input', function(msg) {
      msg.payload = { temperature: 1.23, humidity: 4.56 };
    });

  }

  RED.nodes.registerType("sensor-htu21d", Htu21dNode);
}
