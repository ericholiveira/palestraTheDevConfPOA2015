(function(){
    var c = document.getElementsByTagName("canvas")[0];
    var MAX_WIDTH= 800;
    c.style = "width='"+MAX_WIDTH+"px'";
    var ctx = c.getContext("2d");
    var x=0;
    function draw(){
        ctx.clearRect(0, 0, MAX_WIDTH, 1000);
        ctx.beginPath();
        ctx.arc(x,100,20,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        x+=10;
    }
    window.setInterval(draw,100);
}());