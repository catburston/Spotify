(function (global) {




  'use strict';

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.spotify.com/v1/tracks/0eGsygTp906u18L0Oimnem');
xhr.setRequestHeader('Accept', 'application/json');

xhr.onload = function () {
     if (this.status === 200) { // the result is OK
       var response = JSON.parse(xhr.response);
       console.log('onload response', response);

       handleResponse(response);
     }
   };

xhr.send();

var handleResponse = function(info){


console.log(info.album.name);
console.log(info.name);
console.log(info.artists[0].name);
console.log(info.album.images[0].url);

var $widget = $('.widget');
$widget.find('.title').text(info.name); //replace text of Title tag with Song Title
$widget.find('.author').text(info.artists[0].name); //replace text of Author tag with Author name
$widget.find('.cover img').attr('src', info.album.images[1].url);
$widget.find('#audio').attr('src', info.preview_url);

var playing = false;


$('.btn-play').on('click', function(){

if (playing == false) {
	$widget.find('#audio').trigger('play');

	playing = true;

	
} else {
	$widget.find('#audio').trigger('pause');
	playing = false;
}
});




}

})(window);



//KEEPING FOR LATER
//var prgValue = 1;
//var songLength = info.duration_ms;
//var progUnit = songLength/30;
//console.log(audio.currentTime);
