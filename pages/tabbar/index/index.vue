<template>
	<view class="content">
		<Nav></Nav>
		<view  v-for="(item,index) in 100" :key="index">
				{{item}}--正文
		</view>
		
	</view>
</template>

<script>
	import Nav from "@/components/nav/nav.vue"
	export default {
		data() {
			return {
				title: "hello"
			}
		},
		onLoad() {

		},
		components:{
			Nav:Nav
		},
		methods: {

		}
	}
</script>

<style>
	
</style>
