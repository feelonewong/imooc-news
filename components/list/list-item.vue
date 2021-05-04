<template>
	<list-scroll class="list-scroll" @loadMore="loadMore">
		<list-card 
			v-for="item in list" 
			:item="item"
			:key="item._id">
		</list-card>
		
		<uni-load-more 
		v-if="list.length>4 || list.length===0 "
		iconType="snow" :status="load.loading"></uni-load-more>
		
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
			},
			load:{
				type: Object,
				default(){
					return {}
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
