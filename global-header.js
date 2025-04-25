/**
This script will inject the global page header into teh #gheader div of each page
**/

const INJECTION = '<div id="global-preheader"><h1 class="heading">🌷Mililani\'s Personal Site🌷<h1></div><div id="global-header"><ul id="nav-list"><li>Home</li><li><a href="/allen/sunset-albums/index.html">Sunsets</a><ul><li>album 1</li><li>album 2</li><li>album 3</li></ul></li><li><a href="/allen/music-albums/index.html">Music</a><ul><li>album 1</li><li>album 2</li><li>album 3</li></ul></li><li><a href="/allen/photo-albums/index.html">Beach</a><ul><li>album 1</li><li>album 2</li><li>album 3</li></ul></li><li><a href="/allen/webdev/index.html">Web Dev</a><ul><li>week 1</li><li>week 2</li><li>week 3</li><li>week 4</li><li>week 5</li><li>week 6</li><li>week 7</li><li>week 8</li><li>week 9</li></ul></li></ul></div>';

let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;



