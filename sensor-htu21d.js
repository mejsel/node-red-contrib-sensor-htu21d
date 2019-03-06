let Htu21d = require('sensor-htu21d');

module.exports = function(RED) {

  function Htu21dNode(config) {

    RED.nodes.createNode(this, config);
    var node = this;

    this.device = config.device;
    this.period = config.period*1000;
    console.log('this.device', this.device);
    console.log('this.period', this.period);

    let htu = new Htu21d(Number(this.device), this.period);

    node.status({fill:"grey",shape:"dot",text:"inactive"});

    htu.on('readout-complete', (data) => {
      var msg = {payload: data};
      node.status({fill:"green",shape:"dot",text:"active"});
      node.send(msg);
    });

    htu.on('error', (error) => {
      node.status({fill:"red",shape:"dot",text:"error"});
      node.warn(error);
    });

    htu.start();

    node.on('close', () => {
      htu.stop();
    });

  }

  RED.nodes.registerType("sensor-htu21d", Htu21dNode);
}
