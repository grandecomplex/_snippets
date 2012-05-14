/*  

  This is how to use TreeWalker DOM node search.
  
  In this example, I'm searching for site-search, a dom element on the MDN website.

*/

var targetNode = document.getElementById("site-search");

var walker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ALL, // SHOW_ELEMENT
  function(node) {
    console.log(node)
    if (node === targetNode) { 
      return NodeFilter.FILTER_ACCEPT;
    } else {
      return NodeFilter.FILTER_SKIP;
    }
  },
  false);

var nodes = [];

while(walker.nextNode()) {
  nodes.push(walker.currentNode);
}

console.log(nodes);

