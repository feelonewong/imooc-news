<template>
	<view class="home">
		<navbar></navbar>
		<tab :list="tabList" 
			:tabIndex="tabIndex"
		@tab="tab"></tab>

		<view class="home-list">
			<list :tab="tabList"
				  :activeIndex="activeIndex"
				  @changeListItem="changeListItem"
			></list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				column:"column",
				base:"base",
				image:"image",
				tabList: [],
				tabIndex:0,
				activeIndex:0
			}
		},
		onLoad() {

		},
		created() {
			this.getLabel();
		},
		
		methods: {
			getLabel() {
				//this.$api.get_labe.({name:"get_label"}).then()
				this.$api.get_label({
					url: "get_label"
				}).then(response => {
					let {
						data
					} = response;
					data.unshift({
						name:"全部"
					});
					this.tabList = data;

				})
			},
			
			tab({
				data,
				index
			}) {
				this.activeIndex = index;
			},
			changeListItem(value){
				this.tabIndex = value;
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}

	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
	}
	.home-list{
		height: 100%;
	}
</style>
