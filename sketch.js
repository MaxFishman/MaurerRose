// Max Fishman Final Project

let n = 6; // Let r = sin(nθ) be a rose in the polar coordinate system, where n is a positive integer. The rose has n petals if n is odd, and 2n petals if n is even.

let d = 60; //  d is a positive integer and the angles are in degrees, not radians. 

let dSlider; // Slider for D

let nSlider; // Slider for N

let hu = 1;  // Starting Color

function setup() {                       // Setup Function 
	createCanvas(1024, 768);             // Create Canvas (1024,768)
	angleMode(DEGREES);                  // Change the mode to DEGREES
  dSlider = createSlider(1, 90, 23);     // CreatSlider D
	dSlider.position(80, height - 140);  // dSlider Posistion on Page
  dSlider.style('width', '150px');       // dSlider style
	colorMode(HSB, 255);                 // Changes the way Processing interprets color data. 
    
  nSlider = createSlider(1, 90, 23);     // CreatSlider N
    nSlider.position(80, height - 70);   // nSlider Posistion on Page
    nSlider.style('width', '150px');     // nSlider style 
}                                        // closing bracket 

function draw() {                        // Draw Function 
	background(10);                      // Background Color RGB HEX
   text('D', 80, height - 140);
  fill(255, 102, 153);
  text('N', 80, height - 70);
  fill(255, 102, 153);
	translate(width/2, height/2);        // Center everything on Canvas
	stroke(hu%255, 255, 255);            // Draw Stroke Color
	d = dSlider.value();                 // declarding variable d = dSlider.value()
  	n = nSlider.value();                 // declarding variable n = nSlider.value()

	noFill();                            // Disables filling geometry, nothing will be drawn 
	beginShape();                        // recording vertices for shape and endShape stops . 
	strokeWeight(1);                     // Sets the width of the stroke used for lines
   
  
	for (let i = 0; i < 361; i++) {      // If i < 361 increment up; 
		let k = i * d;                   // decalring variable K as = i * d
		let r = 310 * sin(n*k);          // decalring variable r as = 310 * sin(n*k)
		let x = r * cos(k);              // decalring variable x as = r * cos(k)
		let y = r * sin(k);              // decalring variable y as = r * sin(k)
		stroke(hu%255, 255, 255);        // stroke color able to change using hu 
		vertex(x,y);                     // used to specify the vertex coordinates for lines
	}                                    // closing bracket 
	endShape();                          // endShape function is the companion to beginShape()
	
	noFill();                            // Disables filling geometry, nothing will be drawn
	stroke((hu + 20)%255, 255, 255);     // Stroke Color 
	strokeWeight(1);                     // Sets the width of the stroke used for lines
	beginShape();                        // recording vertices for shape and endShape stops 
	for (let i = 0; i < 361; i++) {      // for loop while i < 361 ; increment up i++ 
		let k = i;                       // decalring variable K as = i
		let r = 310 * sin(n*k);          // declaring r = 310 * sin(n*k)
		let x = r * cos(k);              // declaring x = r * cos(k)
		let y = r * sin(k);              // declaring y = r * sin(k)
		vertex(x,y);                     // used to specify the vertex coordinates for lines
	}                                    // closing bracket 
	endShape();	                         // endShape function is the companion to beginShape()
	hu += .2;                            // Rate of Change of Line Color 


}                                        // closing bracket 