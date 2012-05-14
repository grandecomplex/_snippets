/*  
 Testing performance of visual memory and CPU for creating a 1000 images very fast.
*/

var counter = 0;
document.body.innerHTML = "";
document.body.style.height =  "1000px";
(function appendImage() {
  var image = document.createElement("img");
  image.src="http://4.bp.blogspot.com/-8KMHR_yHZgY/TwlnSzbjvnI/AAAAAAAAAT4/-qB22fmnGoE/s640/cute-cat-sleeping.jpg";
  image.style.width="100px";
  image.style.position = "absolute";
  image.style.webkitTransition = "all 2s linear";
  image.id = counter;
  document.body.appendChild(image); 
  counter++;
  setTimeout(function() {
    image.style.webkitTransform="translate3d("+counter+"px, 309px, 0)";
    image.style.width = "200px"
    appendImage();
  }, 30)
})();