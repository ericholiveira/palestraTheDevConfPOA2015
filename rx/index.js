(function(){
    var unsubscribe;
    function addObject(i){
        var id = Date.now()+'_'+i
        $('body').append("<div id='div_"+id+"' class='obj'><span>"+i+"</span></div>");
        var myBox = document.getElementById('div_'+id);
        myBox.addEventListener('webkitAnimationEnd',function( event ) { myBox.style.display = 'none'; }, false);
    }

    Rx.Observable.fromEvent($('#desenha'),'click')
      //.merge(Rx.Observable.fromEvent($('body'),'keypress'))
      //.map(function(n,i){return i})
      //.take(3)
      //.bufferCount(3)
      //.throttleTime(500)
      //.flatMap(function(i){return Rx.Observable.of(i).delay(1000)})
      /*.bufferTime(1000,1000,3)
      .filter(function(arr){
          return arr.length===3
      })*/


    .subscribe(addObject);
}());
