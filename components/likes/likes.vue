<template>
	<view class="icons" @click="likeTap">
		<uni-icons  size="20" 
			:type="like?'heart-filled':'heart' "
		color="#f07373"></uni-icons>
	</view>
</template>

<script>
	export default {
		name:"likes",
		props:{
			item:{
				type: Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				like: false
			};
		},
		watch:{
			item(newVal){
				this.like = this.item.is_like;
			}
		},
		created() {
				this.like = this.item.is_like;
		},
		methods:{
			likeTap(){
				this.like = !this.like;
				this.setUpdateLike();
			},
			setUpdateLike(){
				uni.showLoading()
				this.$api.update_like({
					"user_id":"608ddcd089dd6e0001492e3c",
					"article_id": this.item._id
				}).then( (res)=>{
					uni.hideLoading();
					uni.showToast({
						title:this.like?"收藏成功":"取消收藏",
						icon:"none"
					})
				}).catch(err=>{
					uni.showToast({
						title:"收藏失败",
						icon:"none"
					})
					uni.hideLoading();
				})
			}
		}
	}
</script>

<style lang="scss">
	.icons{
		position: absolute;
		top: 0;
		right: 0;
		width: 20px;
		height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
