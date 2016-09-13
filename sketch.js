function setup()
{
  // Canvas Variables
  var canvasWidth = 500;
  var canvasHeight = 500;
  var midX = canvasWidth/2;       // midpoint X
  var midY = canvasHeight/2;      // midpoint Y

  // Object Variables
  var x;      // x position
  var y;      // y position
  var w;      // width
  var h;      // height
  var radius; // radius
  var delta;  // direction and magnitude of change

  // Color Varioables
  var r;      // red
  var g;      // green
  var b;      // blue

  createCanvas(canvasWidth, canvasHeight);


  radius = 20;
  r = 200;
  g = 0;
  b = 0;
  var xSpace = radius/2;
  var ySpace = radius/2;

  /*
  // scale pattern circles
  for(y = 0; y < canvasHeight + radius; y += ySpace)
  {
    for (x = 0; x < canvasWidth + radius; x += xSpace)
    {
      fill(0,g,b);
      ellipse(x,y,radius);
      if (b + 1 < 256)
        {b += 1;}
      if (r > -1)
        {r -= 1;}
    }
    if (g + 10 < 256)
      {g += 10}
    radius += 5;
    xSpace = radius/2;
    ySpace = radius/2;
  }
  */

  // Central perspective objects
  w = 30;
  h = canvasHeight * 0.75;
  delta = w*3;

  var topLX;
  var topLY;
  var oldTopLX = 0;
  var oldTopLY = 0;

  var topRX;
  var topRY;
  var oldTopRX = canvasWidth;
  var oldTopRY = 0;

  var botLX;
  var botLY;
  var oldBotLX = 0;
  var oldBotLY = canvasHeight;

  var botRX;
  var botRY;
  var oldBotRX = canvasWidth;
  var oldBotRY = canvasHeight;

  b = 250;
  g = 200;

  stroke(0,g,b);
  fill(0,g,b);
  quad(oldTopLX,oldTopLY, oldTopRX,oldTopRY, oldBotRX,oldBotRY, oldBotLX,oldBotLY);

  for(x = w; x <= midX; x += delta)
  {

    if (x > w)
    {
      oldTopLX = topLX;
      oldTopLY = topLY;

      oldTopRX = topRX;
      oldTopRY = topRY

      oldBotLX = botLX;
      oldBotLY = botLY;

      oldBotRX = botRX;
      oldBotRY = botRY;
    }

    topLX = x+delta/2;
    topLY = midY - h/2;

    topRX = canvasWidth - x - delta/2;
    topRY = midY - h/2;

    botLX = x+delta/2;
    botLY = midY + h/2;

    botRX = canvasWidth - x - delta/2;
    botRY = midY + h/2;

    g -= delta * 0.75;
    b -= delta *0.75;
    stroke(0,g,b);
    fill(0,g,b);
    quad(topLX,topLY, topRX,topRY, botRX,botRY, botLX,botLY);
    //quad(x+delta/2, midY - h/2, canvasWidth - x - delta/2, midY - h/2, canvasWidth - x - delta/2, midY + h/2, x+delta/2, midY + h/2);


    stroke(0,0,0);
    fill(0,0,0);
    // diagonal lines
    line(topLX,topLY, oldTopLX, oldTopLY);
    line(topRX, topRY, oldTopRX, oldTopRY);
    line(botLX, botLY, oldBotLX, oldBotLY);
    line(botRX,botRY, oldBotRX, oldBotRY);


    line(topLX, topLY, topRX, topRY);
    line(botLX, botLY, botRX, botRY);

    // left and right ellipses converging on center point
    ellipse(x,midY,w,h);
    ellipse(canvasWidth - x, midY, w, h);


    // adjustments to measurements, with "if" statments to prevent infinite loops
    if (w> 1/0.75)
      {w =  w * 0.75;}
    else
      {w = 1;}

    if (h> 1/0.75)
      {h =  h * 0.75;}
    else
      {h = 1;}

    if (delta > 1/0.75)
      {delta =  delta * 0.75;}
    else
      {delta = 1;}
  }

  /*

  var aMax = 20;  // maximum amplitude of wavy line
  var aMin = 3;   // minimum amplitude of wavy line
  var a = aMin;   // amplitude of wavy line. Starts at the minimum.
  var deltaMax = 5; //maximum change
  var delta = 1;  // change of amplitude

  var y = canvasHeight/2;
  var topCrest = y + a;
  var bottomCrest = y - a;

  for (var x = 0; x <= canvasWidth; x += 1)
  {
    line(x,a,x,-a);

    if (a >= aMax)
      {delta = -1;}
    if (a <= aMin)
      {delta = 1;}
    a += delta;
  }
  */
}
