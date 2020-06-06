var sys = require('util')
var exec = require('child_process').exec;


var os = require('os');
//control OS
//then run command depengin on the OS

if (os.type() === 'Linux') 
   exec("mkdir \"./api/deployment\" && \"./api/env/bin/pip.exe\" install -r \"./api/requirements.txt\" -t \"./api/deployment\" && \"./deploy/env/bin/python.exe\" \"./deploy/deploy_api.py\" && rmdir /s /q \"./api/deployment\""); 
else if (os.type() === 'Darwin') 
   exec("mkdir \"./api/deployment\" && \"./api/env/bin/pip.exe\" install -r \"./api/requirements.txt\" -t \"./api/deployment\" && \"./deploy/env/bin/python.exe\" \"./deploy/deploy_api.py\" && rmdir /s /q \"./api/deployment\""); 
else if (os.type() === 'Windows_NT') 
   exec("mkdir \"./api/deployment\" && \"./api/env/Scripts/pip.exe\" install -r \"./api/requirements.txt\" -t \"./api/deployment\" && \"./deploy/env/Scripts/python.exe\" \"./deploy/deploy_api.py\" && rmdir /s /q \"./api/deployment\"");
else
   throw new Error("Unsupported OS found: " + os.type());