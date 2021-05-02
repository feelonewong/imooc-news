<template>
	<view class="content">
		<Nav></Nav>
		<Tab :list="tabList"></Tab>
		
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
				this.$api.get_label({name:"get_label"}).then(response=>{
					let {data} = response;
					this.tabList = data;
				})
			}
		}
	}
</script>

<style>
	
</style>
