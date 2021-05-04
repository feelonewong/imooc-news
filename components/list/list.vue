<template>
	<swiper class="home-swiper" :current="activeIndex" @change="changeListItem">
		<swiper-item class="swiper-item" v-for="(item, index) in tab" :key="index">
			<ListItem :list="listCacheData[index]" 
			:load="load[index]"
			@loadMore="loadMore"></ListItem>
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
				listCacheData:{},
				load:{},
				pageSize: 5
			};
		},
		watch:{
			tab(newValue){
				if(newValue.length===0){
					return;
				}
				this.getList(this.activeIndex);
			}
		},
		methods: {
			loadMore(){
				// this.pageIndex++;
				if(this.load[this.activeIndex].loading === "noMore"){
					return;
				}
				this.load[this.activeIndex].pageIndex++;
				this.getList(this.activeIndex);
			},
			changeListItem(e) {
				let {current} = e.detail;
				this.$emit("changeListItem", current);
				if(this.listCacheData.length === 0 || !this.listCacheData[current]){
						this.getList(current);
				}
			},
			getList(current) {
				if(!this.load[current]){
					this.load[current]={
						pageIndex:1,
						loading: "loading"
					}
				}
				this.$api.get_list({
					name: this.tab[current].name,
					pageIndex: this.load[current].pageIndex,
					pageSize: this.pageSize
				}).then((response) => {
					let {data} = response;
					if(data.length===0){
						let oldLoad = {};
						oldLoad.loading = "noMore";
						oldLoad.page = this.load[current].pageIndex;
						this.$set(this.load, current,oldLoad);
						this.$forceUpdate();
						return ;
					}
					console.log(data,this.load[current].pageIndex);
					let oldList = this.listCacheData[current]||[];
					oldList.push(...data);
					this.$set(this.listCacheData, current,oldList);
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
