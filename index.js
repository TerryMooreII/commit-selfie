

var config = require('./config.js')
var exec = require('child_process').exec;
var imgur = require('imgur');

imgur.setClientId(config.imgur.clientId);

var PIC_CMD = 'mplayer -vo png -frames 2 tv://';
var IMG_FILE = '00000002.png';

exec(PIC_CMD,
  function (error, stdout, stderr) {
     uploadImage();
});


function uploadImage (){
	
	imgur.uploadFile(IMG_FILE)
    .then(function (json) {
        console.log(json.data.link);
    })
    .catch(function (err) {
        console.error(err.message);
    });
}