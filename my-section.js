Vue.component('my-section',{
			mixins: [ Mixin ],
			template: '<section v-bind:style="style"> <div class="fill">My Section {{ model }} <input type="text" v-model="model" /></div></section>',
			data: () =>({
				style:{
					background: 'yellow'
				},
				model: ''

			}),
			watch:{
				model (){
					this.$emit('input',this.model)
				}
			}
		})
	