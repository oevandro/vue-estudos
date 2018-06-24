Vue.component('my-aside',{
			mixins: [ Mixin ],
			props: ['message'],
			template: '<aside v-html="message"> <div class="fill">aside</div></aside>'
			// data: () => ({
			// 	title: 'My <b>Beauty</b> Aside'				
			// })
		})