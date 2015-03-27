

git-commit-pic
================

Take a picture and upload it to imgur.com at every commit.  The url to the uploaded image is appended to the commit message.


How-to
---------
- Clone this repo to the .git folder of your project
- Navigate the folder and run `npm install`
- Go to imgur.com and get an API key
- Create a config.js and add your keys to it (See below)
- Copy the `commit-msg` git hook to the `.git/hooks/` folder.


Config.js
-------------
```javascript
exports.imgur = {
	clientId: '<your-client-id>',
	clientSecret: '<your-client-secret>'
};
```
Dark Images
-----------------
If your images are dark then increase the `FRAME_TO_UPLOAD` value.



Requirements
--------------
mplayer


Supported OS
---------------
Only tested on Linux




NOTE
============
Adding this to your `.git` folder might be a really bad idea.  Use this at your own risk