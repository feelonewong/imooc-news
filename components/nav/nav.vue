<template>
	<view class="nav">
		<view class="nav-fixed">
			<!-- 状态栏高度 -->
			<view :style="{height: statusHeight+'px'}"></view>
			<!-- searchbar内容 -->
			<view class="nav-content" :style="{height: searchHeight+'px',
				width: searchWidth+'px'
			}">
				<view class="nav-search">
					<view class="nav-search_icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="nav-search_text">
						uniapp、vue
					</view>
				</view>
			</view>

		</view>
		<view :style="{height: statusHeight+searchHeight+'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusHeight: 0,
				searchHeight: 45,
				searchWidth: 375
			}
		},
		created() {
			
			//获取状态栏高度
			let info = uni.getSystemInfoSync()
			this.statusHeight = info.statusBarHeight;
			this.searchWidth = info.windowWidth;
			//计算胶囊高度设置为search的高度
			//公式:(胶囊底部高度-statusBarHeight高度)+(胶囊顶部高度-statusBarht高度) ===胶囊本身高度
			// 等价于胶囊本身高度和上边边距 + 下边边距
			// #ifdef MP-WEIXIN
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			let height = (menuButtonInfo.bottom - info.statusBarHeight) +
				(menuButtonInfo.top - info.statusBarHeight);
			this.searchHeight = height;
			this.searchWidth = menuButtonInfo.left;
			// #endif
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.nav {
		.nav-fixed {
			position: fixed;
			top: 0;
			left: 0;
			background-color: $mk-base-color;
			width: 100%;

			.nav-content {
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;

				padding: 0 15px;

				.nav-search {
					height: 30px;
					width: 100%;
					display: flex;
					align-items: center;
					border-radius: 30px;
					padding: 0 15px;
					background-color: #fff;

					.nav-search_icon {
						// width: 10px;
						// height: 10px;
						//border: 1px solid red;
						margin-right: 10px;
					}

					.nave-search_text {
						font-size: 12px;
						color: #999;
					}
				}
			}
		}
	}
</style>
