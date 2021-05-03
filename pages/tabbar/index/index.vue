<template>
	<view class="home">
		<navbar></navbar>
		<tab :list="tabList" @tab="tab"></tab>

		<view class="home-list">
			<list :tab="tabList"></list>
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
				tabList: []
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
					this.tabList = data;

				})
			},
			tab({
				data,
				index
			}) {
				
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
