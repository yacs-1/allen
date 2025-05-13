/**
This script will inject the global page header into teh #gheader div of each page
**/

const INJECTION = '<div id="global-preheader"><h1 class="heading">🌷Mililani\'s Personal Site🌷<h1></div><div id="global-header"><ul id="nav-list"><li>Home</li><li><a href="/allen/sunset-albums/index.html">Sunsets</a><ul><li>album 1</li><li>album 2</li><li>album 3</li></ul></li><li><a href="/allen/music-albums/index.html">Music</a><ul><li>album 1</li><li>album 2</li><li>album 3</li></ul></li><li><a href="/allen/photo-albums/index.html">Beach</a><ul><li>album 1</li><li>album 2</li><li>album 3</li></ul></li><li><a href="/allen/webdev/index.html">Web Dev</a><ul><li><a href="/allen/wdsub/week1.html">week 1</a></li><li><a href="/allen/wdsub/recipe.html">week 2</a></li><li><a href="/allen/wdsub/anchors.html">week 3</a></li><li><a href="/allen/wdsub/poem.html">week 4</a></li><li><a href="/allen/wdsub/reviews.html">week 5</a></li><li><a href="/allen/wdsub/week6.html">week 6</a></li><li><a href="/allen/wdsub/band-page.html">week 7</a></li><li><a href="/allen/wdsub/week8.html">week 8</a></li><li><a href="/allen/wdsub/pythag.html">week 9</a></li><li><a href="/allen/wdsub/ttt.html">week 10</a></li></ul></li></ul></div>';

let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;



