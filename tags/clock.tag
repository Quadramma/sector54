<mytag>

  <input name="username" onblur={ validate }>
  <span class="tooltip" show={ error }>{ error }</span>

  var self = this

  validate() {
    
        self.error = 'Se produjo un error'
        self.update()
     
  }
</mytag>

