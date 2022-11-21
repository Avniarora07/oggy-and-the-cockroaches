
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 450;
block_image_height = 150;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
block_image_object = Img;

block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
top:block_y,
left:block_x	
});
canvas.add(block_image_object);
});
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '79')  
	{
		block_x = 10;
		new_image('oggy.png');
		console.log("o");
	}
	if(keyPressed == '74')
	{
		block_x = 200;
		new_image('jack.png');
		console.log("j");
	}
	
	if(keyPressed == '76')
	{
		block_x =350;
		new_image('olivia.png');
		console.log("l");
	}
	if(keyPressed == '67')
	{
		block_x = 500;
		new_image('coc.jpeg');
		console.log("c");
	}
	if(keyPressed == '68')
	{
		block_x = 700;
		new_image('doggy.jpeg');
		console.log("d");
	}
	
}

