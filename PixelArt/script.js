
var penColour = 'black';
function setPixelColour(pixel)
{
 pixel.style.backgroundColor = penColour;
}
function setPenColour(pen)
{
	penColour = pen;
	setCurrentColour(penColour);
}

function setCurrentColour(colour)
{
	var currentColour = document.getElementById("currentColour");
	currentColour.style.backgroundColor = colour;
	
	
}
