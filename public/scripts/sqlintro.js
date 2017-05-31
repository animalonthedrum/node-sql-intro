$(document).ready(function(){
console.log(JQ);
});//emd doc ready


var getImages = function(){
  //test get call to server

  var objectToSend = {
    thing: meow
  };
  $.ajax({
    type: 'POST',
    url: '/images',
    data: objectToSend,
    success:function(response){
      console.log('back from post call with:', response);
    }
  });
  $.ajax({
    type: 'GET',
    url: '/images',
    success:function(response){
      console.log('back from get call with:', response);
    }
  });
};
