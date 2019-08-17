<template>
	<div>
		<div class="home-header">
			<div class="header-logo kom-pull-left">
				<span>这里可以是logo</span>
			</div>
			<div class="header-info kom-pull-right">
				<span>用户名</span>
				<span class="home-logout"><i class="kiconfont kiconfenlei"></i> 退出</span>
			</div>
		</div>
		<div class="home-sider">
			<ul>
				<li><i class="kiconfont kiconfenlei"></i> 导航一</li>
				<li><i class="kiconfont kiconfenlei"></i> 导航一</li>
				<li class="active"><i class="kiconfont kiconfenlei"></i> 导航一</li>
				<li><i class="kiconfont kiconfenlei"></i> 导航一</li>
			</ul>
		</div>
		<div class="home-content">
			<router-view />
		</div>
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
	mounted(){
		this.$router.push({name: 'childrenList'});
	}
}
</script>

<style scoped lang="less">
	// 顶部导航
	.home-header{
		overflow: hidden;
		position: fixed;
		z-index: 1000;
		top: 0;
		left: 0;
		right: 0;
		padding: 0 24px;
		line-height:50px;
		height:50px;
		background:rgba(28,39,63,1);
		color:rgba(255,255,255,1);
		.header-logo{
			span{
				padding-left: 10px;
				margin-left: 10px;
				font-size:16px;
				font-weight:600;
			}
		}
		.header-info{
			span{
				margin-right: 20px;
				font-weight:400;
				color:rgba(255,255,255,1);
				&.home-logout{
					cursor: pointer;
					i{
						margin-right: 5px;
					}
				}
				
			}
		}
	}

	// 侧边栏
	.home-sider{
		overflow: hidden;
		position: fixed;
		z-index: 999;
		top: 0;
		bottom: 0;
		left: 0;
		height: 100%;
		width: 200px;
		background:rgba(53,60,75,1);
		ul{
			padding: 60px 0;
			li{
				padding: 0 20px;
				height: 50px;
				line-height: 50px;
				font-weight: 400;
				color:rgba(202,206,220,1);
				cursor: pointer;
				-webkit-transition: .4s;
				transition: .4s;
				i{
					margin-right: 10px;
				}
				&.active, &:hover{
					background:rgba(73,92,138,1);
					padding-left: 30px;
					-webkit-transition: .4s;
					transition: .4s;
				}
			}
		}
	}

	// 内容
	.home-content{
		padding-left: 200px;
		padding-top: 50px;
	}
</style>
