var quot = "";
function getQuoteText(){
	quot = $('.quote').text();
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
			  $('.twitter-share-button').attr('href', "https://twitter.com/intent/tweet?text=" + quot);
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
