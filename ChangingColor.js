///represents a color with the r, g, and b values changing independently
class ChangingColor {
    constuctor(speed){
        this.r = r;
        this.g = g;
        this .b = b;
        
        //higher speed = color changes faster
        this.speed = speed;

        //'directions': tells whether an rgb value should be increasing or decreasing
        this.dirs = [1, 1, 1];
    }

    get color(){
        return this.col;
    }

    update(){

    }
}