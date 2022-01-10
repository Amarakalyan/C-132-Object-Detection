img="";
status="";

function preload()
{
    img=loadImage("dog_cat.jpg");
}

function setup()
{
  canvas=createCanvas(640,420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
  console.log("Model Loaded");
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error,results)
{
  if(error)
  {
    console.log(error);
  }
  console.log(results);
}

function draw()
{
    image(img,0,0,640,420);
    fill("#ff0000");
    text("Dog",45,75);
    noFill();
    stroke("#ff0000");
    rect(30,60,500,350);

    stroke("#ff80ff");
    fill("#ffffff");
    noFill();
    rect(300,70,280,330);
    text("Cat",330,120);

    stroke("#ff0000");
    fill("#ffffff");
    noFill();
    rect(280,320,112,90);
    text("Bowl",300,350);

}