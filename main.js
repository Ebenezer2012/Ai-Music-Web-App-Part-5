song ="";

function preload(){
    song = loadSound("OMFG---Hello.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist = 0;
rightWristX = 0;
rightWristy = 0;
leftWristX = 0;
leftWristY = 0;

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('pose net instialized');
}

function draw(){
    image(video, 0, 0, 600, 550);
    fill("#FF0000");
    stroke("#FF0000");

    if(scoreRightWrist > 0.2)
circle(rightWristx, rightWristY,20);
if(rightWristY >0 && rightWristY <= 100){
document.getElementById("speed").innerHTML ="Speed=0.5x"; 
song.rate(0.5);
}
else if(rightWristY >100 && rightWristY <= 200){
document.getElementById("speed").innerHTML = "Speed = 1x";
song.rate(1);
}
else if(rightwristy >200 && rightWristY <- 300){
document.getElementById("speed").innerHTML = "Speed=1.5x";
song.rate(1.5);
}
else if(rightwristy >200 && rightWristY <- 400){
document.getElementById("speed").innerHTML = "Speed=2x";
song.rate(2);
}

if(scoreLeftWrist > 0.2)
{
circle(leftWristx, leftWristY, 20);
InNumberleftWristY = Number(leftWristY);
remove_decimals=floor (InNumberleftWristY);
volume = remove_decimals/500;
document.getElementById("volume").innerHTML = "Volume ="+volume;
song.setVolume(volume);
}
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function Stop(){
    song.stop();
}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    scoreRightWrist= result[0].pose.keypoint[10].score;
    scoreRightLeft= result[0].pose.keypoint[9].score;
    console.log("scoreRightWrist=" +scoreRightWrist+"scoreLeftWrist="+scoreLeftWrist);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = "+ leftWristX+"leftWristY= "+leftWristY);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = "+ rightWristX+"rightWristY= "+rightWristY);
}
}
