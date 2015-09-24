(function(){
    var i=0;
    var unsubscribe;
    function addObject(){
        $('body').append("<div id='div_"+i+"' class='obj'><span>"+i+"</span></div>");
        var myBox = document.getElementById('div_'+i);
        myBox.addEventListener('webkitAnimationEnd',function( event ) { myBox.style.display = 'none'; }, false);
        i++;
    }

    var stream = $('#desenha').asEventStream('click');
    //stream = stream.bufferWithCount(3);
    //stream = stream.throttle(500);
    //stream = stream.debounce(500);
    //stream = stream.bufferingThrottle(500);
    /*stream = stream.flatMap(function(){
        return Bacon.fromArray([1,2,3]);
     ;});
    //stream = stream.bufferingThrottle(500);
    */
    /*var tripleClickStream = $('body').asEventStream('click').bufferWithTimeOrCount(500,3).
        filter(function(events){return events.length===3;});
      stream = stream.merge(tripleClickStream);
    */

    /*var tripleKeyPressStream = $('body').asEventStream('keypress').bufferWithTimeOrCount(500,3).
        filter(function(events){return events.length===3;});
     stream = stream.merge(tripleKeyPressStream);*/

    unsubscribe = stream.onValue(addObject);


    //unsubscribe();
}());
