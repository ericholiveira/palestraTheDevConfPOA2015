(function(){
  var adicionaStream = $('#adiciona').asEventStream('click').map(function(event){
    //console.log('adiciona');
    return 1;
  });
  var subtraiStream = $('#subtrai').asEventStream('click').map(function(event){
    return -1;
  });
  adicionaStream.merge(subtraiStream).scan(0,function (a,b) { return a + b; }).onValue(function(value){$('#resultado').val(value);});
}());


