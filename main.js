canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
roverWidth = 100;
roverHeight = 90;
backgroundImage = "mars.jpg";
roverImage = "rover.png";
roverX = 10;
roverY = 10;
function add(){
    backgroundIngTag=new Image();
    backgroundIngTag.onload=uploadbackground;backgroundIngTag.src=backgroundImage;
    rouverIngTag=new Image();
    rouverIngTag.onload=uploadrouver;rouverIngTag.src=roverImage;
}
function uploadbackground(){
    ctx.drawImage(backgroundIngTag,0,0,canvas.width,canvas.height);
}
function uploadrouver(){
    ctx.drawImage(rouverIngTag,roverX,roverY,roverWidth,roverHeight);
}
window.addEventListener("keydown", Mykeydown);
function Mykeydown(e){
    keyperessed=e.keyCode;
    if(keyperessed=="38"){
        up();
    }
    if(keyperessed=="40"){
        down();
    }
    if(keyperessed=="37"){
        left();
    }
    if(keyperessed=="39"){
        right();
    }
}
function up(){
    if(roverY>=0){
        roverY=roverY-10;
        uploadbackground();
        uploadrouver();
    }}
    function down(){
        if(roverY<=500){
            roverY=roverY+10;
            uploadbackground();
            uploadrouver();
        }}
        function left(){
            if(roverX>=0){
                roverX=roverX-10;
                uploadbackground();
                uploadrouver();
            }}
            function right(){
                if(roverX<=700){
                    roverX=roverX+10;
                    uploadbackground();
                    uploadrouver();
                }}