<template>
	<swiper class="home-swiper" :current="activeIndex" @change="changeListItem">
		<swiper-item class="swiper-item" v-for="(item, index) in tab" :key="index">
			<ListItem :list="listCacheData[index]"></ListItem>
		</swiper-item>


	</swiper>
</template>

<script>
	import ListItem from "./list-item.vue"
	export default {
		name: "list",
		props: {
			tab: {
				type: Array,
				default () {
					return [];
				}
			},
			activeIndex: {
				type: Number,
				default () {
					return 0;
				}
			}
		},
		data() {
			return {
				list:[],
				listCacheData:{}
			};
		},
		watch:{
			tab(newValue){
				if(newValue.length===0){
					return;
				}
				this.getList(this.activeIndex);
				console.log(newValue,'---');
			}
		},
		methods: {
			changeListItem(e) {
				let idx = e.detail.current;
				this.getList(idx);
				this.$emit("changeListItem", idx);
			},
			getList(current) {
				this.$api.get_list({
					name: this.tab[current].name
				}).then((response) => {
					let {data} = response;
					this.listCacheData[current] = data;
					this.$set(this.listCacheData, current,data);
					this.$forceUpdate();
				})
			}
		},
		components: {
			ListItem: ListItem
		}
	}
</script>

<style lang="scss">
	.home-swiper {
		height: 100%;

		.swiper-item {
			height: 100%;
			overflow: hidden;

		}
	}
</style>
