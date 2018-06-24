Vue.component('my-nav',{
			mixins: [ Mixin ],
			props: {
				message: {
					type: String,
				    default: 'App Title'
				},
			},
			template: `<nav> <div class="fill"><button @click="$emit('toggle')">#</button>{{message}}</div></nav>`
			// data: function () {
			// 	return {
			// 		title: 'My Pretty Nav'
			// 	}
			// }
			//data: () => ({
			//	title: 'My Pretty Nav'				
			//})
		})