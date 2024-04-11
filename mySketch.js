// Modified from Daniel Shifman - codingtra.in
// Starter Option One: Particles
//Things to try:
// - Change the words - try phrases for more narrative / poetics!
// - Change the colors - try the background, and the words!
// - Change the font and size of the words
// - Change the particle system - try changing the starting points
// - Change the movement - try playing with the alpha and direction

particles = [];
//Just like with Tracery, put anything you want in the ""s
words = ["Stanley Almodovar III","Amanda L. Alvear","Oscar Aracena Montero","Rodolfo Ayala Ayala","Antonio Davon Brown","Darryl Roman Burt II","Angel Candelario-Padro","Juan Chavez Martinez", "Luis Daniel Conde","Cory James Connell","Tevin Eugene Crosby","Deonka Deidra Drayton","Simón Adrian Carrillo Fernández","Leroy Valentin Fernandez", "Mercedez Marisol Flores","Peter Ommy Gonzalez Cruz","Juan Ramon Guerrero","Paul Terrell Henry","Frank Hernandez","Miguel Angel Honorato","Javier Jorge Reyes","Jason Benjamin Josaphat","Eddie Jamoldroy Justice","Anthony Luis Laureano Disla","Christopher Andrew Leinonen","Alejandro Barrios Martinez", "Brenda Marquez McCool","Gilberto R. Silva Menendez","Kimberly Jean Morris","Akyra Monet Murray","Luis Omar Ocasio Capo","Geraldo A. Ortiz Jimenez","Eric Ivan Ortiz-Rivera","Joel Rayon Paniagua","Jean Carlos Mendez Perez","Enrique L. Rios, Jr","Jean Carlos Nieves Rodríguez","Xavier Emmanuel Serrano-Rosado","Christopher Joseph Sanfeliz","Yilmary Rodríguez Solivan","Edward Sotomayor Jr.","Shane Evan Tomlinson","Martin Benitez Torres","Jonathan A. Camuy Vega","Juan Pablo Rivera Velázquez","Luis Sergio Vielma","Franky Jimmy DeJesus Velázquez","Luis Daniel Wilson-Leon","Jerald Arthur Wright","Sex means the binary division of individuals based upon reproductive","Throughout instruction in acquired immune deficiency syndrome, sexually transmitted diseases, or health education, when such instruction and course material contains instruction in human sexuality, such instruction may only occur in grades 6 through 12", "Teach that sex is determined by biology and reproductive function at birth; that biological males impregnate biological females by fertilizing the female egg with male sperm; that the female then gestates the offspring", "Teach abstinence from sexual activity outside of marriage as the expected standard for all school-age students while teaching the benefits of monogamous heterosexual marriage",]
function setup() {
	//This creates a canvas the size of the screen
  createCanvas(windowWidth, windowHeight);
}

function draw() {
 // Define the gradient colors
  let pinkColor = color(255, 192, 203); // Pink
  let lightBlueColor = color(173, 216, 230); // Light blue
  let whiteColor = color(255); // White

  // Draw the gradient background
  for (let y = 0; y < height; y++) {
    // Calculate the interpolation value (0 to 1) based on the current y position
    let gradientValue = map(y, 0, height, 0, 1);
    let blendedColor = lerpColor(pinkColor, lightBlueColor, gradientValue);

    // Set the background color for each line
    stroke(blendedColor);
    line(0, y, width, y);
  }
	
	//This creates the particles
  for (let i = 0; i < 3; i++) {
    let p = new Particle();
    particles.push(p);
  }
	//This moves the particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor() {
		//This sets the x value to anywhere - try using a static value
    this.x = random (0, windowWidth);
		//This keeps the y fixed - try reversing it using windowHeight
    this.y = (0);
		//This sets the range of x movement - try limiting it to + or -
    this.vx = random(-1, 1);
		//This sets the range of y movement - try reversing it
    this.vy = random(1, 3);
		//This sets the range of color - this is what keeps us in yellows
		//Try using it for all three to create a broader range of color
		//Or try changing the scale to use the full 0-255
		this.color = random(255,49);
    this.alpha = 255;
		//This picks a random word for each particle
		this.text = random(words);
  }

  finished() {
		//Change this to 255 if you reverse the fade
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
		//Change this to +1 if you reverse the fade
    this.alpha -= 1;
  }

  show() {
    noStroke();
    fill(49,49,this.color, this.alpha);
		//This positions the text
    text(this.text, this.x, this.y);
  }
}