
class Circle {
    #positionX
    #positionY
    #radius
    #color
    constructor(positionX ,positionY, radius , color = 'red') {
        this.#positionX = positionX
        this.#positionY = positionY
        this.#radius = radius
        this.#color = color
    }
    addPage(){
        let elem = document.createElement('div');
        elem.classList.add('circle');
        elem.style.left = this.#positionX + 'px';
        elem.style.top = this.#positionY + 'px';
        elem.style.backgroundColor= this.#color;
        elem.style.height = elem.style.width = this.#radius + 'px';
        document.body.appendChild(elem);
    }
}
let outCircle = new Circle(10,55,300, 'red' );
let outCircle1 = new Circle(350,15,250, 'blue' );
let outCircle2 = new Circle(300,200,230, 'green' );
let outCircle3 = new Circle(10,350,250, 'brown' );
let outCircle4 = new Circle(500,300,200, 'purple' );
let outCircle5 = new Circle(350,450,150, 'yellow' );
let outCircle6 = new Circle(100,150,100, 'orange');
let outCircle7 = new Circle(200,125,100, 'red' );
let outCircle8 = new Circle(300,110,100, 'red' );
let outCircle9 = new Circle(400,100,100, 'red' );
let outCircle10 = new Circle(500,111,100, 'red' );
let outCircle11 = new Circle(100,60,100, 'red' );
let outCircle12 = new Circle(100,60,100, 'red' );
let outCircle13 = new Circle(100,60,100, 'red' );
let outCircle14 = new Circle(100,60,100, 'red' );
let outCircle15 = new Circle(100,60,100, 'red' );
let outCircle16 = new Circle(100,60,100, 'red' );
let outCircle17 = new Circle(100,60,100, 'red' );
let outCircle18 = new Circle(100,60,100, 'red' );


outCircle.addPage();
outCircle1.addPage();
outCircle2.addPage();
outCircle3.addPage();
outCircle4.addPage();
outCircle5.addPage();
