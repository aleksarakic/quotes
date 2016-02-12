var quotAndAut = "";
function getQuoteText(){
	quot = $('.quote').text();
	aut = $('.author').text();
}

var func = function(){
	function reqListener() {
		  $('.quote').empty();
			$('.author').empty();
				var xml = this.responseText;
				xmlDoc = $.parseXML(xml)
			  $xml = $(xmlDoc)
			  $quoteText = $xml.find("quote");
			  $quoteAuthor = $xml.find("author");
			  $(".quote").append($quoteText.text());
			  $(".author").append($quoteAuthor.text());
			  getQuoteText();
			  if(quot.length + aut.length + 10 >= 140){
			  	surplus = aut.length + 9; 
			  	newQuot = quot.substring(-1, 140 - surplus);
			  	$('.twitter-share-button').attr('href', "https://twitter.com/intent/tweet?text=" + "'" + newQuot + "..." + "'" + " by " + aut);
			  }else{
			  	$('.twitter-share-button').attr('href', "https://twitter.com/intent/tweet?text=" + quot + " by " + aut);
				}
			}

		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", reqListener);
		oReq.open("GET", "http://www.stands4.com/services/v2/quotes.php?uid=4768&tokenid=2iHYphk3qdY4rTug");
		oReq.send(); 
}

$(document).ready(function(){
	func();
	getQuoteText();
});
