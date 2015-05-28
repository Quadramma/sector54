<barcode>

	<input id="sentence" type="text" placeholder="Escribe un link" value="www.clarity.com.ar" />
	<button onclick={send}>Enviar</button>
	{valid}
	<div id="barcodeContainer" class={hidden:valid}>
		<img name="barcode">
	</div>

	var self = this
	self.api = 'https://sjehutch-barcode-generator.p.mashape.com/qrcode/1/1?text='
	//params:  /qrcode/6/6/?text=http%3A%2F%2Fwww.google.com'
	self.valid = false
	var http = riot.reqwest
	var blobUtil = riot.blobUtil

	send(){

		http({
			url: self.api+self.sentence.value,
			method: 'get',
			headers: {'X-Mashape-Key':'J22xHRICJ5mshzydcIk4zGLEJhKpp1dypOGjsnsHv3Bmq5r7Gc'},
			error: function(err) {},
			success: function(resp) {
				console.log(resp)
   				var raw = resp.responseText
   				var encoded = btoa(unescape(encodeURIComponent(raw)))
   				self.barcode.src = 'data:image/png;base64,' + encoded;

   				
   				self.valid = true
				self.update()
			}
		})

	}

</barcode>