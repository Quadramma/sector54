<yoda>
	<input id="sentence" type="text" placeholder="Write a sentence" value="You will learn how to speak like me someday" />
	<button onclick={send}>Send</button>

	<h1>{response}</h1>

	var self = this
	self.api = 'https://yoda.p.mashape.com/yoda?sentence='
	
	var $ = riot.qwery 
	var reqwest = riot.reqwest

	send(){

		console.log('send start')
		//var val = $('input#sentence')[0].value
		console.log(this.sentence.value)
		reqwest({
			url: self.api+this.sentence.value,
			//type: 'html',
			method: 'get',
			contentType: 'text/plain',
			headers: {'X-Mashape-Key':'uisC4VCmEYmsh9lo6TxE732P1Tufp1g2ZS9jsnkS0mrNUTlZA0'},
			error: function(err) {},
			success: function(resp) {
				self.response = resp
				self.update()
			}
		})

	}

</yoda>