class Circle {
    #radius;
    #color;
    constructor(radius = 1.0, color = 'red'){
        this.#radius = radius;
        this.#color = color;
    }

    getRadius() {
        return this.#radius;
    }

    setRadius(radius){
        this.#radius = radius
    }

    getColor(){
        return this.#color;
    }
    
    setColor(color) {
        this.#color = color;
    }

    getArea(){
        return Math.PI * Math.pow(this.getRadius(), 2);
    }

    getCircumference() {
        return 2 * Math.PI * this.getRadius();
    }

    toString() {
        return `Circle[radius = ${this.getRadius()}, color= ${this.getColor()}]`;
    }

}

//toString default radius and color of 1 and red
console.log(new Circle().toString())
// Circle[radius = 1, color= red]

//Area of circle with radius 4 and color red
console.log(new Circle(4).getArea());
// 50.26548245743669


//Circumference of circle with default radius and color blue
console.log(new Circle(undefined, 'blue').getCircumference());
// 6.283185307179586