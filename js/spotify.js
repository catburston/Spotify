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
//console.log(info.duration_ms);

var $widget = $('.widget');
$widget.find('.title').text(info.name); //replace text of Title tag with Song Title
$widget.find('.author').text(info.artists[0].name); //replace text of Author tag with Author name
$widget.find('.cover img').attr('src', info.album.images[1].url);
var prgValue = 0;

var songLength = info.duration_ms;
//console.log(songLength);
var progUnit = songLength/30;
//console.log(progUnit);

//every progUnit of time, increase value of progress bar by 1
console.log()

//for (var i = 0; i < 10; i++) {
	//var intervalCounter = window.setInterval(console.log('string'), 40000);
//};

var value = setInterval(function () {
     $widget.find('progress').attr('value', prgValue);
     prgValue ++;
	console.log(prgValue);
   }, progUnit);

//var sound= $widget.find('#audio');
var playing = false;

$('.btn-play').on('click', function(){
	//add
if (playing == false) {
	$widget.find('#audio').trigger('play');
	playing = true;
} else {
	$widget.find('#audio').trigger('pause');
	playing = false;
}

});

/*
$widget.on('click','.btn-play', sound.play())*/


}

})(window);



