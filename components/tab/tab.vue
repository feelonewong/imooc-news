<template>
	<view class="tab">
		<scroll-view scroll-x="true" class="tab-scroll">
			<view class="tab-scroll_box">
				<view class="tab-scroll_item" v-for="item in list">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab_icons">
			<uni-icons size="26" type="gear" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tab",
		data() {
			return {
				list:[
					{
						name:"uni-app"
					},
					{
						name:"Vue"
					},
					{
						name:"React"
					},
					{
						name:"Java"
					},
					{
						name:"前端"
					},
					{
						name:"后端"
					},
					{
						name:"微服务"
					},
					{
						name:"PHP"
					}
				]
			};
		}
	}
</script>

<style lang="scss">
	.tab{
		background-color: #fff;
		width: 100%;
		display: flex;
		box-sizing: border-box;
		border-bottom: 1px solid #f5f5f5;
		.tab-scroll{
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			.tab-scroll_box{
				display: flex;
				height: 45px;
				align-items: center;
				flex-wrap: nowrap;
				.tab-scroll_item{
					flex-shrink: 0;
					padding: 0 10px;
					color: #333;
					font-size: 14px;
				}
			}
		 }
		 .tab_icons{
		 	width: 45px;
		 	display: flex;
			position: relative;
		 	bordr:1px solid red;
		 	justify-content: center;
		 	align-items: center;
		 	&::after{
		 		content: "";
		 		position: absolute;
		 		top: 12px;
		 		bottom: 12px;
		 		left: 0;
		 		width: 1px;
		 		background-color: #ddd;
		 	}
		 }
		
	}
</style>
