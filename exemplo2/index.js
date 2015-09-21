(function(){
    var i=0;
    function addObject(){
        $('body').append("<div id='div_"+i+"' class='obj'><span>"+i+"</span></div>");
        var myBox = document.getElementById('div_'+i);
        myBox.addEventListener('webkitAnimationEnd',function( event ) { myBox.style.display = 'none'; }, false);
        i++;
    }

    $('#desenha').asEventStream('click').bufferingThrottle(500).onValue(addObject);

    //$('body').asEventStream('click').bufferWithTimeOrCount(500,3).filter(function(events){return events.length===3;}).onValue(addObject);


    //$('body').asEventStream('keypress').bufferWithTimeOrCount(500,3).filter(function(events){return events.length===3;}).onValue(addObject);
}());
