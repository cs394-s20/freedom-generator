var sys = require('util')
var exec = require('child_process').exec;


var os = require('os');
//control OS
//then run command depengin on the OS

if (os.type() === 'Linux') 
   exec("npm run build && \"deploy/env/bin/python.exe\" \"deploy/deploy_web.py\""); 
else if (os.type() === 'Darwin') 
   exec("npm run build && \"deploy/env/bin/python.exe\" \"deploy/deploy_web.py\""); 
else if (os.type() === 'Windows_NT') 
   exec("npm run build && \"deploy/env/Scripts/python.exe\" \"deploy/deploy_web.py\"");
else
   throw new Error("Unsupported OS found: " + os.type());