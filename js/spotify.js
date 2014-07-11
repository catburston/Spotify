(function (global) {
  'use strict';

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.spotify.com/v1/tracks/7Bxv0WL7UC6WwQpk9TzdMJ');
xhr.setRequestHeader('Accept', 'application/json');

xhr.onload = function () {
     if (this.status === 200) { // the result is OK
       var response = JSON.parse(xhr.response);
       console.log('onload response', response);
     }
   };

})(window);