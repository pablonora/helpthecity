require('./angular');
module.exports = angular;

function onDeviceReady(){
    var map = new GoogleMap();
    map.initialize();
}
