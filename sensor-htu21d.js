let Htu21d = require('sensor-htu21d');

module.exports = function(RED) {


  function Htu21dNode(config) {

    RED.nodes.createNode(this, config);
    var node = this;
    

    //let htu = new Htu21d(1, 1000);

    /*
    htu.on('fertig', (data) => {
      msg.payload = data;
      node.send(msg);
    });
    */

    //htu.start();

    var timer = setInterval( () => { 
      var msg = {payload: "htu timer!"};
      node.send(msg);
    }, 1000);

    node.on('input', function(msg) {
      msg.payload = { temperature: 1.23, humidity: 4.56 };
      node.send(msg);
    });

  }

  RED.nodes.registerType("sensor-htu21d", Htu21dNode);
}
