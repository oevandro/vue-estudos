Vue.config.devtools = true;
 		
		var app = new Vue({
		  el: '#app',
		  data: {
		    message: 'Olá Vue!',
		    open: false
		  },
		  methods:{
		  	update (){
		  		this.open = !this.open
		  	}
		  }
		})