<template>
	<list-scroll class="list-scroll" @loadMore="loadMore">
		<list-card 
			v-for="item in list" 
			:item="item"
			:key="item._id">
		</list-card>
		
		<uni-load-more iconType="snow" status="noMore"></uni-load-more>
		
	</list-scroll>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			loadMore(){
				this.$emit("loadMore");
			}
		}
	}
</script>

<style lang="scss">
	.list-scroll{
		height: 100%;
	}
</style>
