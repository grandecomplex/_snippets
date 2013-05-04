var text = [];
var textobj = {};
var maxLengthOfString = 46;

$(".wrapper").find("a, p, li, h1, h2, h3, h4, h5, span, em, input[placeholder], strong")
.each(function () {
  if ( typeof $(this).attr("placeholder") !== "undefined" && $(this).attr("placeholder").length > 0 ) {
    text.push( $(this).attr("placeholder") );
  } else {
    text.push( $(this).text() );
  }
});

text.forEach(function (item) {
    var stringthing = item.toLowerCase().trim().split(" ").join("_");
    if (stringthing.length >= maxLengthOfString) {
      stringthing = stringthing.slice(0, maxLengthOfString);
    }
    textobj[ stringthing.replace(/,|\'/, "") ] = item;
});

textobj;