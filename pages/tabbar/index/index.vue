<template>
	<view class="content">
		<Nav></Nav>
		<Tab></Tab>
		
	</view>
</template>

<script>
	import Nav from "@/components/nav/nav.vue";
	import Tab from "@/components/tab/tab.vue"
	export default {
		data() {
			return {
				title: "hello"
			}
		},
		onLoad() {

		},
		components:{
			Nav:Nav,
			Tab:Tab
		},
		methods: {

		}
	}
</script>

<style>
	
</style>
