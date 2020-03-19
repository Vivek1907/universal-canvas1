var drawing, currentPath;
var weight;

function setup(){
  var canvas = createCanvas(displayWidth,displayHeight);
  canvas.mousePressed(Path);
  canvas.mouseReleased(End);
  drawing = [];
  currentPath = [];
  weight = 1;
}

function Path(){
  drawing.push(currentPath);
}

function End(){
  currentPath = [];
}

function draw(){
  background(255);
  text("PRESS UP OR DOWN ARROW KEYS TO CHANGE THE STROKE WEIGHT",displayWidth/4,10);
  
  if(mouseIsPressed){
    var location = {
      'x': mouseX,
      'y': mouseY
    }
    currentPath.push(location);
  }

  for(var i = 0; i<drawing.length;i++){
    var path = drawing[i];
    push();
    stroke(0);
    noFill();
    beginShape();
    for(var j = 0; j<path.length; j++){
     strokeWeight(weight);
     vertex(path[j].x,path[j].y);
    }
    endShape();
    pop();
  }
}

function keyPressed(){
  if(keyCode === 38){
    weight+=1;
  }
  if(keyCode === 40){
    weight-=1;
  }
}