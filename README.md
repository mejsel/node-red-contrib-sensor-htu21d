## Synopsis
This node reads out a HTU21d humidity/temperature sensor connected via I2C.

## Installation
The node can be installed by "Manage palette"-"Install" on the web interface.
Alternatively it can be installed on the commandline with "npm install node-red-contrib-sensor-htu21d".

It depends on "sensor-htu21d" which uses async/await functionality only found on nodejs versions >= 7.6!
If the installation fails please check and update your nodejs version.
When using a docker image depending on nodered/node-red-docker please consider using (e.g.) nodered/node-red-docker:v8 in order to have a more recent nodejs version. A working container for the Raspberry Pi for example is nodered/node-red-docker:rpi-v8.

## Usage
The Htu21d node periodically emits objects containing a "temperature" and a "humidity" property.
The default period is 5 seconds and can be changed in the properties. Minimum is 1 second.
The I2C device number is set to 1 as a default. This will interface /dev/i2c-1 (default on Raspberry Pi). Use other device numbers respectively (see "i2c-bus" package).

## Motivation
The HTU21d is capable of measuring humidity with a resolution of 0.04 %rel and temperature with a resolution of 0.01 °C.

## Tests
Using docker on a Raspberry Pi 3:
'''
docker run --publish 1880:1880 --device="/dev/i2c-1:/dev/i2c-1" --privileged nodered/node-red-docker:rpi-v8
'''
... then install and use the node. Use a debug node to check if a temperature/humidity object is emitted.

## Contributors
Mejsel (marcel.indlekofer@gmail.com)

## License
GPL license.
