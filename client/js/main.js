/**
 * Created by kunkun on 14-3-19.
 */

function upload(){
    var form = new FormData();
    var  fileinput = document.getElementById("file");
    form.append("file", fileinput.files[0]);
    var  xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("POST", "/uploadfile", true);
    xmlHttpReq.setRequestHeader("If-Modified-Since", "0");    //no cach
    xmlHttpReq.send(form);
}
window.onload=function(){
    var fileinput = document.getElementById("file");
    var img= document.getElementById("myimage");
    var uploadbt= document.getElementById("uploadbt");
    uploadbt.addEventListener("click",function(){
        upload();
    });

    fileinput.addEventListener('change',function(){
        var file = this.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e){
            img.src = this.result;
        }
    },false);
}