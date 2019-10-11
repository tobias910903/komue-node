<template>
	<div>
		登录页
	</div>
</template>

<script>
export default {
	data(){
		return {

		}
	},
	methods:{

	},
	mounted(){
		console.log(this.$api);

		this.$get(this.$api.test).then((response) => {
	        console.log(response);
	    }).catch(err => {
	        console.log(err);
	    });
	}
}
</script>

<style scoped lang="less">

</style>
