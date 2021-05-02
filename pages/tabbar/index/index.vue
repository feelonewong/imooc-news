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
				uniCloud.callFunction({
					name: "get_label"
				}).then(res => {
					let code = res.result.code;
					if (code === 200) {
						this.tabList = res.result.data;
					}
				})
			}
		}
	}
</script>

<style>
	
</style>
