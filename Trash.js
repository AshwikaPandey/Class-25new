class Trash {
constructor(x,y){
var options={
//isStatic:true,
restitution:0.4,
friction:6,
density:1.2
}
this.body= Bodies.circle(x,y,20,options)
this.width=70;
this.height=70;
this.Image= loadImage("paper.png")
World.add(world ,this.body)

}
display(){
  var pos= this.body.position
  var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
fill(440);

//ellipseMode(RADIUS)
//ellipse(0,0,this.width,this.height)
imageMode(CENTER)
image(this.Image,0,0,80,80)


pop()

}
}
