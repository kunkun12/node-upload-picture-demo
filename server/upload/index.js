var fs = require('fs');
var path = require('path')
var formidable=require("formidable");
function uploadfile(app){
    app.post("/uploadfile",function(req,res){

//        //显示上传进度
//        req.form.on('progress',function(bytesReceived, bytesExpected){
//            console.log(((bytesReceived / bytesExpected)*100)+"% uploaded");
//        });
             targetPath = path.resolve('./server/upload/data/image.png');
              var tempPath = req.files.file.path,
              targetPath = path.resolve('./server/upload/data/'+req.files.file.name);
            fs.rename(tempPath, targetPath, function(err) {
                if (err) throw err;
                // 删除临时文件夹文件,
                console.log("test");
                res.send('File uploaded to: ' + targetPath + ' - ' + req.files.file.size + ' bytes');
            });

//        var form = new formidable.IncomingForm();
//        form.uploadDir = __dirname + '/tmp';
//        form.encoding = 'binary';
//
//        form.addListener('file', function(name, file) {
//            // do something with uploaded file
//            console.log(file)
//        });
//
//        form.addListener('end', function() {
//            console.log("end")
//            res.end();
//        });
//        form.parse(req, function(err, fields, files) {
//            if (err) {
//                console.log(err);
//            }
//        });
   });
}

exports.uploadfile=uploadfile;