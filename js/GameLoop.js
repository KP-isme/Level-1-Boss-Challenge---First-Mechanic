

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var interval = 1000/60;
var timer = setInterval(animate, interval);

player = new GameObject;

player.force = 5;

follower = new GameObject

follower.force = 1;


follower.x = 200;
follower.y = 200;
follower.color =  "#0000ff";


var fX = 0.5;
var fY = 0.5;


function animate()
{
    context.clearRect(0,0,canvas.clientWidth,canvas.height);

    angularMovement();

    player.drawTriangle();
    follower.drawTriangle();

}



function angularMovement()
{
    if(w)
    {
        var radians = player.angle * Math.PI/180;
        player.ax = Math.cos(radians);
        player.ay = Math.sin(radians);

        player.vx += player.ax * player.force;
        player.vy += player.ay * player.force;
        

    }


    if(s)
    {
        var radian = player.angle * Math.PI/180;



    }
    if(a)
    {
        player.angle -= 10;
    }
    if(d)
    {
        player.angle += 10;
    }


    player.vx *= fX;
    player.vy *= fX;

    player.move();

    point();
    
    follow();

}

 function point()
 {

    var dx = player.x - follower.x;
    var dy = player.y - follower.y;

    var radians = Math.atan2(dy,dx);

    follower.angle = radians * 180/Math.PI;


 }


function follow()
{
    var dx = player.x - follower.x;
    var dy = player.y - follower.y;

    var radians = Math.atan2(dy,dx);
    follower.angle = radians * 180/Math.PI;

    follower.vx = Math.cos(radians)*follower.force;
    follower.vy = Math.sin(radians)*follower.force;

    follower.x += follower.vx * 2; 
    follower.y += follower.vy * 2;
 
}



/* 
//for loop for the array

for(var i = 0; i < theAvengers.length; i++)
{
    console.log(theAvengers[i]);
}

*/