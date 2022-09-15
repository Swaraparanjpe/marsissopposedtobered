canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

mars_Array=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
ramdomnumber=Math.floor(Math.random()*4);
console.log(ramdomnumber);



roverwidth=100;
roverheight=90;
roverx=10;
rovery=10;

bgimg=mars_Array[ramdomnumber];
console.log("backgroundimg="+bgimg);
roverimg="rover.png";

function add(){
    bgimgTag=new Image();
    bgimgTag.onload=uploadBackground;
    bgimgTag.src=bgimg;

    roverimgTag=new Image();
    roverimgTag.onload=uploadrover;
    roverimgTag.src=roverimg;
}

function uploadBackground(){
    ctx.drawImage(bgimgTag,0,0,canvas.width,canvas.height);

}

function uploadrover(){
    ctx.drawImage(roverimgTag,roverx,rovery,roverwidth,roverheight);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if (keypressed=='38'){
up();
console.log("up");
}
if (keypressed=='39'){
right();
console.log("right");
}
if (keypressed=='37'){
left();
console.log("left");
}
if (keypressed=='40'){
down();
console.log("down");
}
}
function up(){
    if (rovery>0){
        rovery=rovery-10;
        console.log("whenuparrowpressed,x="+roverx+" y="+rovery);
        uploadBackground();
        uploadrover();
    }
}

function down(){
    if (rovery<=500){
        rovery=rovery+10;
        console.log("whenuparrowpressed,x="+roverx+" y="+rovery);
        uploadBackground();
        uploadrover();
    }
}

function left(){
    if (roverx>0){
        roverx=roverx-10;
        console.log("whenuparrowpressed,x="+roverx+" y="+rovery);
        uploadBackground();
        uploadrover();
    }
}

function right(){
    if (roverx<=700){
        roverx=roverx+10;
        console.log("whenuparrowpressed,x="+roverx+" y="+rovery);
        uploadBackground();
        uploadrover();
    }
}