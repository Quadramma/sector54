//ASD
//import WatchJS from 'melanke/Watch.JS';
//import Grapnel from 'EngineeringMode/Grapnel.js';
//import bonzo from 'ded/bonzo';

import qwery from 'ded/qwery';
import reqwest from 'ded/reqwest';
//import bean from 'fat/bean';
import moment from 'moment';

import blobUtil  from 'nolanlawson/blob-util';

riot.blobUtil  = blobUtil
riot.reqwest = reqwest
riot.qwery = qwery
riot.mount('router');


/*
reqwest({
	url: './tags/my-component.tag',
	type: 'tag',
	method: 'get',
	contentType: 'application/html',
	headers: {

	},
	error: function(err) {},
	success: function(resp) {
		console.log(resp)
		//var t = riot.tag('my-component', resp, function(opts) { })
		//console.log(t);
		riot.compile(function() {
			// here tags are compiled and riot.mount works synchronously
			//var tags = riot.mount(t)
			//console.log(tags);
		})


		
	}
})*/

export function app() {
	console.log('app');


	//reqwest('./views/index.html', function (r) {})

	/*
		System.import('./lib/test',function(){
			console.log('test.jsx');
		});
	*/



	/*
		console.log("main");
		//

		var menuNav 	= 
			{name:'menuNav',route:'/menu',vt:1
			,opts:[
				{l:'Start',go:'startNav',vt:1}
				,{l:'Credits',go:'creditsContent',vt:2}
			]};
		var startNav 	= 
			{name:'startNav',route:'/start',vt:1,tpl:'./views/start.html'
			,opts:[
				{l:'New',go:'newgameContent',vt:2}
				,{l:'Continue',go:'continueOpt'}
			]};
		//
		var newgameContent = {name:'newgameContent',route:'/newgame',tpl:'./views/game.html',vt:2};
		var creditsContent = {name:'creditsContent',route:'/creditos',l:'Creditos Content',tpl:'./views/credits.html',vt:2};
		var error = {name:'error',tpl:"404.html"};
		//
		var states = [menuNav,startNav,newgameContent,creditsContent];
		var getState = function(n){
			for(var x in states){
				if(states[x].name == n) return states[x];
			}
			return null;
		};
		//

		//Principal
		var context = []; //
		var viewType = 1;
		var contextAnt = [];
		var viewTypeEnum = {
			NAV:1,CONTENT:2
		};

		WatchJS.watch(context,function(){
			console.log('watch context change');
		});

		var tpl=function(){
			return context && context.tpl || './views/blank.html'
		};

		var go=function(goN,vt){
			viewType = vt;
			contextAnt = context;
			context = getState(goN);
			//console.log('go '+goN+' '+vt+' route is '+(context && context.route || undefined));
			console.log(context);
			router.navigate(context && context.route||'/error');
		};


		//ROUTING
		var router = new Grapnel({  root:'/dna'});
		router.bind('hashchange',function(a){
			//console.log(a);
		});



		for(var x in states){
			(function(){
				var s = states[x];
				router.get(s.route, function(req){
					//console.log('Route '+s.route+' Name is '+s.name);
					if(context && context.name !== s.name||!context) go(s.name,s.vt);
				});		
				//console.log('Route created for '+s.route);
			})();
		}


		router.get('/*', function(req,e){
			if(!e.parent()){
		        console.log('404');
		    	go('error',2);
		    }
		});
		//
		//EVENTS
		router.on('navigate', function(event){
		    console.log('URL changed to %s', this.fragment.get());
		});
		//
		setTimeout(function(){
			router.navigate('/menu');	//DEFAULT	
		},1000);

	*/

}