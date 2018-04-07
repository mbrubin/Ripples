//represents a color with the r, g, and b values changing independently
class ChangingColor {
    constuctor(speed, rgb_min, rgb_max){ 
        //higher speed = color changes faster
        this.SPEED = speed;

        //rgb min and max: defines the range of valid rgb values
        this.RGB_MIN = rgb_min;
        this.RGB_MAX = rgb_max;

        //initialize to random numbers between min and max
        this.r = Math.floor(Math.random() * (this.RGB_MAX - this.RGB_MIN + 1)) + min;
        this.g = Math.floor(Math.random() * (this.RGB_MAX - this.RGB_MIN + 1)) + min;
        this.b = Math.floor(Math.random() * (this.RGB_MAX - this.RGB_MIN + 1)) + min;

        //'directions': tells whether an rgb value should be increasing or decreasing
        this.dirs = [1, 1, 1];
    }

    get color(){
        print('rgb = '+this.r+', '+this.g+', '+this.b+')');
        return color(this.r, this.g, this.b);
    }

    update(){
        //update dirs
        if(this.r >= this.RGB_MAX){
            this.dirs[0] = -1;
        }
        else if(this.r <= this.RGB_MIN){
            this.dirs[0] = 1;
        }
    
        if(this.g >= this.GB_MAX){
            this.dirs[1] = -1;
        }
        else if(g <= this.RGB_MIN){
            this.dirs[1] = 1;
        }
    
        if(this.b >= this.RGB_MAX){
            this.dirs[2] = -1;
        }
        else if(this.b <= this.RGB_MIN){
            this.dirs[2] = 1;
        }

        //updates individial rgb values
        this.r = this.r + this.dirs[0] * Math.floor(Math.random() * this.SPEED);
        this.g = this.g + this.dirs[1] * Math.floor(Math.random() * this.SPEED);
        this.b = this.b + this.dirs[2] * Math.floor(Math.random() * this.SPEED);
    }
}