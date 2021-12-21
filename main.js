noseX=0;
nosey=0;
differnce=0;
rightwristX=0;
lefttwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("blue");
    document.getElementById("square_sides").innerHTML="Width and height of a square will be  ="+ differnce+"px";
    fill("yellow");
    stroke("yellow");
    square(noseX,nosey,differnce);
    
}
function modelLoaded(){
    console.log('poseNet Is Initialized!');

}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY ="+nosey);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        console.log("leftWristX=" +leftWristX+"rightWristX="+rightWristX);
        differnce=floor(leftWristX-rightWristX);

        
    }
}

