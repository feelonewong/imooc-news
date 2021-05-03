<template>
	<view class="home">
		<Nav></Nav>
		<Tab :list="tabList" @tab="tab"></Tab>

		<ListScroll>
			<ListCard :mode=" column "></ListCard>
			<ListCard :mode=" base "></ListCard>
			<ListCard :mode=" image "></ListCard>
		</ListScroll>
	</view>
</template>

<script>
	import Nav from "@/components/nav/nav.vue";
	import Tab from "@/components/tab/tab.vue";
	import ListScroll from "@/components/list-scroll/list-scroll.vue";
	import ListCard from "@/components/list-card/list-card.vue";
	
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
		components: {
			Nav: Nav,
			Tab: Tab,
			ListScroll:ListScroll,
			ListCard:ListCard
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
				console.log(data, index, "index");
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
</style>
