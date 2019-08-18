 var count = 1;
 const HEIGHT = 200;
 window.onscroll = function(){
  	addElem();
  	
  };
  function addElem () {
  	if(pageYOffset>=(HEIGHT*count)){
  	 document.body.innerHTML += "<div id='repeat'></div>";
  	 document.body.innerHTML += "<p id='count'>"+ count+ "</p>";
  	 count++; 

  }
}