class Wall{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    display(){
        var wall = createSprite(this.x, this.y, this.width, this.height);
        wall.addImage("wall", wallImg);
        wallGroup.add(wall);
        wall.setCollider("rectangle",0,0, wall.width-70, wall.height-15);
       
    }
}