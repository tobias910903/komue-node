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
		// 当前页面用来判断各种逻辑和跳转...
		// 已经登录 跳 /home
		// 未登录   跳 /login 
	}
}
</script>