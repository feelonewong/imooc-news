<template>
	<view class="home">
		<Nav></Nav>
		<Tab :list="tabList" @tab="tab"></Tab>
		
		<view class="scroll">
			<scroll-view scroll-y="true" class="list-scroll">
				<view>
					<view class="" v-for="(item, index) in 100" :key="index">
						{{item}}
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Nav from "@/components/nav/nav.vue";
	import Tab from "@/components/tab/tab.vue"
	export default {
		data() {
			return {
				tabList:[]
			}
		},
		onLoad() {

		},
		created() {
			this.getLabel();
		},
		components:{
			Nav:Nav,
			Tab:Tab
		},
		methods: {
			getLabel() {
				//this.$api.get_labe.({name:"get_label"}).then()
				this.$api.get_label({url:"get_label"}).then(response=>{
					let {data} = response;
					this.tabList = data;
					
				})
			},
			tab({data, index}){
				console.log(data,index,"index");
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.home{
		display: flex;
		flex-direction: column;
		flex: 1;
		.scroll{
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			.list-scroll{
				height: 100%;
				display: flex;
				flex-direction: column;
			}
		}
	}
</style>
