const Mixin = {

	beforeCreate () {
		console.log('beforeCreate: ', this.$options.name)
	},

	created () {
		console.log('created: ', this.$options.name)
	},

	beforeMount () {
		console.warn('beforeMount: ', this.$options.name)
	},

	mounted () {
		console.warn('mounted: ', this.$options.name)
	},

	beforeUpdate () {
		console.error('beforeUpdate: ', this.$options.name)
	},

	updated () {
		console.error('updated: ', this.$options.name)
	},

	beforeDestroy () {
		console.log('beforeDestroy: ', this.$options.name)
	},

	destroyed () {
		console.log('destroyed: ', this.$options.name)
	}

}