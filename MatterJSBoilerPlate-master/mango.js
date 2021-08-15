class mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.image=loadImage("mango.png")
        this.body=Bodies.cirle(x,y,r,options)
        World.add(world,this.body);
    }
    display(){
        var MangoPos=this.body.position;
        push ()
        translate (MangoPos.x,MangoPos.y);
        rotate (this.body.angle)
        fill(128,128,128)
        imageMode (CENTER);
        ellipseMode(CENTER);
        image (this.image,0,0,this.r*2,this.r*2)
        pop ()
    
    }
}