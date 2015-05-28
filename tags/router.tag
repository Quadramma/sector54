<router>

	<div>{name}</div>

	var self = this
	self.route = {collection:'',id:'',action:''}
	self.defaultTags = ['nav']
	self.defaultView  = 'home'
	self.notfoundView = 'notfound'
	self.currentName = '' //Represents the name of the current route //eg home,services,contact
	self.currentTag = null
	var getDefaultTagsConcatened=function(){
		var str =''
		for(var x in self.defaultTags){
			str+=', '+self.defaultTags[x]
		}
		var rta = str.slice(1)
		return rta
	}
	var tryMount=function(routeName){
		if(self.currentTag!=null){
			self.currentTag.unmount(true)	
		} 
		var arr =riot.mount(routeName)	
		self.currentTag =  arr&&arr.length==1 && arr[0] || null
		return arr.length == 1;
	}
	var tryMountOnFailGoTo=function(routeName,failFn){
		if(tryMount(routeName)){
			self.currentName = routeName
			self.update()	
		}else{
			failFn && failFn()
		}
	}
	var onRouteChange=function(collection,id,action){
		self.route = {collection:collection,id:id,action:action}
		collection = collection===''?self.defaultView:collection
		tryMountOnFailGoTo(collection,function(){
			tryMountOnFailGoTo(self.notfoundView,function(){
				tryMount(self.defaultView,null) 
			})	
		})
	}
	riot.route(onRouteChange);
	riot.route.start() // start again
	riot.route.exec(onRouteChange)
	riot.mount(getDefaultTagsConcatened()) //Mount default tags
	riot.myrouterTag = this
</router>