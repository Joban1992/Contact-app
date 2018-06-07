var fs = require('fs-extra');
var npm = require('npm');

var sourcePath = './server/';
var destPath = './dist/ContactsApp/';

function filenamesFromFolder(dirname){
  return new Promise(function(resolve, reject){
    fs.readdir(dirname, function(err, filenames) {
      if (err) {
        console.log(err);
        reject(err);
      }
    //  console.log('files')
      resolve(filenames);
    })
  })
}

function writeFilesInDesFolder(dirname, destPath){
  return new Promise(function(reslove, reject){
    filenamesFromFolder(dirname).then(function(filenames){
      let count = 1;
      filenames.forEach(function(file, index){
          
          if(file.indexOf('serverConfig.js')==-1){
              fs.copy(sourcePath+file, destPath+file, function (err) {
                if (err){
                  reject();
                  //return console.error(err);
                }
                count++;
                console.log('Copied to ' + destPath, count, filenames.length);
                if(count == filenames.length){
                    reslove();
                }
              });
            }
      })
    
  
    }).catch(function(){
      reject();
    })
  })
  
}

function doNPMInstall(){
  
npm.load(function(err) {
  // handle errors
  // install module ffi
  npm.commands.install(['express', 'open', 'path'], function(er, data) {
    // log errors or data
  });

  npm.on('log', function(message) {
    // log installation progress
    console.log(message);
  });
});
}

writeFilesInDesFolder(sourcePath, destPath).then(function(res){
  console.log('File has been copied');
  //doNPMInstall();
});