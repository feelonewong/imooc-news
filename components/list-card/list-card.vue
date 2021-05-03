<template>
	<view>
		<!-- 基础卡片模式 -->
		<view v-if=" mode === 'base' " class="listcard">
			<view class="listcard-image">
				<image src="../../static/follow-active.png" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-content__title">
					<text>
							这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题
					</text>
				</view>
				<view class="listcard-content__desc">
					<view class="listcard-content__desc-label">
						<view class="listcard-content__desc-label-item">
							前端
						</view>
						
					</view>
					<view class="listcard-content__desc-browser">
						120浏览
					</view>
				</view>
				
			</view>
		</view>
		<!-- 多图卡片模式 -->
		<view  v-if=" mode === 'column' " class="listcard mode-column">
			<view class="listcard-content">
				<view class="listcard-content__title">
					<text>
						这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题
					</text>
				</view>
				<view class="listcard-image">
					<view class="listcard-image-item">
						<image src="../../static/follow-active.png" mode="aspectFill"></image>
					</view>
					<view class="listcard-image-item">
						<image src="../../static/follow-active.png" mode="aspectFill"></image>
					</view>
					<view class="listcard-image-item">
						<image src="../../static/follow-active.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="listcard-content__desc">
					<view class="listcard-content__desc-label">
						<view class="listcard-content__desc-label-item">
							前端
						</view>
					</view>
					<view class="listcard-content__desc-browser">
						120浏览
					</view>
				</view>
			</view>
		</view>
		<!-- 大图模式 -->
		<view  v-if=" mode === 'image' " class="listcard mode-image">
			<view class="listcard-image">
				
					<image src="../../static/follow-active.png" mode="aspectFill"></image>
				
			</view>
			<view class="listcard-content">
				
				<view class="listcard-content__title">
					<text>
						这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题
					</text>
				</view>
				
				<view class="listcard-content__desc">
					<view class="listcard-content__desc-label">
						<view class="listcard-content__desc-label-item">
							前端
						</view>
					</view>
					<view class="listcard-content__desc-browser">
						120浏览
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "list-card",
		props:{
			mode:{
				type:String,
				default:"base"
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.listcard {
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;

		.listcard-image {
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			overflow: hidden;
			border-radius: 5px;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.listcard-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			padding-left: 10px;

			.listcard-content__title {
				font-size: 14px;
				color: #333;
				font-weight: 400;
				line-height: 1.2;

				text {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}

			.listcard-content__desc {
				display: flex;
				justify-content: space-between;

				.listcard-content__desc-label {

					.listcard-content__desc-label-item {
						padding: 0 5px;
						border: 1px solid $mk-base-color;
						color: $mk-base-color;
						font-size: 12px;
						border-radius: 5px;
					}
				}

				.listcard-content__desc-browser {
					color: #999;
					font-size: 12px;
				}

			}
		}

		&.mode-column {
			.listcard-content {
				width: 100%;
				padding-left: 0;
				.listcard-image{
					display: flex;
					margin-top: 10px;
					width: 100%;
					height: 70px;
					margin-bottom: 10px;
					.listcard-image-item {
						margin-left: 10px;
						width: 100%;
						border-radius: 5px;
						overflow: hidden;
						border: 1px solid red;
						&:nth-child(1){
							margin-left: 0;
						}
						image {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
		&.mode-image{
			flex-direction: column;
			.listcard-image{
				width: 100%;
				height: 100px;
			}
			.listcard-content{
				padding-left: 0;
				margin-top: 10px;
				.listcard-content__desc{
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
			}
		}
	}
</style>
