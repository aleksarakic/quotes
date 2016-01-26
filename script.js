var funkcija = function(){
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
		}

	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", "http://www.stands4.com/services/v2/quotes.php?uid=4768&tokenid=2iHYphk3qdY4rTug");
	oReq.send();
}//ULEPSATI!!!

$(document).ready(function(){
	funkcija();
});

