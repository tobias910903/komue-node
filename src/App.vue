<template>
	<div id="app">
    	<router-view />
	</div>
</template>

<script>
export default {
  	data(){
		return {

		}
	},
	methods: {

	},
	watch:{
		// $route(to, from){ // 监听路由
		// 	console.log("当前路由", to.name + ", 上一级路由", from.name);
		// }
	},
	mounted(){

	}
}
</script>