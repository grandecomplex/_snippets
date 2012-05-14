// interview questions

1. Set an event on every element on the body

var children = document.body.children;
var childrenLength = document.body.childElementCount;

for (var i = 0; i < childrenLength; i++) (function(i) {

  children[i].addEventListener("click", function(e) {
    console.log(this)
  }, false);
})(i);

// Alternative

var children = document.body.childNodes;
var childrenLength = children.length;

function handler(i) {
  return function() {
    console.log(i);
  }
}

for (var i = 0; i < childrenLength; i++) {
  children[i].addEventListener("click", handler(i), false);
};


2. Traverse a tree of nodes to find a matching node

function matchNode(node, target) {
  var children, childLength, match;
  
  if (node === target) {
    return node;
  }
  
  children = node.childNodes;
  childLength = children.length;
  
  for (var i = 0; i < childLength; i++) {
    match = matchNode(children[i], target);
    if (match === target) {
      return match;
    }
  }
}

3. Convert roman numeral to arabic number

function romanToArabic(roman) {
    // TODO: Add roman validation - VVVVI shouldn't fly. But not the point of the excerise
    // But, I'll at least uppercase them for fun.
    roman = roman.toUpperCase();
    
    var map = {
        I: 1,
        V: 5,
        X: 10
    }
    
    var result = 0;
    
    for ( var romanLength = roman.length, i = 0; i < romanLength; i++ ) {
        var currentLetter = map[ roman[i] ];
        if ( roman[i+1] && ( currentLetter < map[ roman[i+1] ] ) ) {
            result -= currentLetter;
        } else {
            result += currentLetter;
        }
    }
    
    return result;
}