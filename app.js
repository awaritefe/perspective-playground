const vm = Vue.createApp({
	data() {
		return {
			perspective: 100,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			bgColor: '#8d81f3'
		}
	},
	computed: {
		box() {
			return {
				transform: `
					perspective(${this.perspective}px)
					rotateX(${this.rotateX}deg)
					rotateY(${this.rotateY}deg)
					rotateZ(${this.rotateZ}deg)
				`
			}
		},
		boxColor() {
			return {
				backgroundColor: `
					${this.bgColor}
				`
			}
		}
	},
	methods: {
		reset() {
			this.perspective = 100
			this.rotateX = 0
			this.rotateY = 0
			this.rotateZ = 0
		},
		async copy() {
			const text = `transform:${this.box.transform};`
			await navigator.clipboard.writeText(text)
			
			alert('CSS copied to clipboard!')
		}
	}
	
}).mount('#app');