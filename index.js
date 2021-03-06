//Terry Moore

var config = require('./config.js')
var exec = require('child_process').exec;
var imgur = require('imgur');

var FRAME_TO_UPLOAD = 12;
var PIC_CMD = 'mplayer -vo png -frames ' + FRAME_TO_UPLOAD + ' tv://';
var IMG_FILE = '../git-commit-pic/000000' + FRAME_TO_UPLOAD + '.png';

imgur.setClientId(config.imgur.clientId);


function takePic(){
	exec(PIC_CMD,
	  function (error, stdout, stderr) {
	     uploadImage();
	});
}

function uploadImage (){
	
	imgur.uploadFile(IMG_FILE)
    .then(function (json) {
        console.log(json.data.link);
    })
    .catch(function (err) {
        console.error(err.message);
    });
}

function run(){
	takePic();
}

takePic();