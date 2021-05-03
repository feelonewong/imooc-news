<template>
	<swiper class="home-swiper">
		<swiper-item class="swiper-item"
		v-for="(item, index) in tab" :key="index"
		>
		
			<ListItem></ListItem>
		</swiper-item>
		
		
	</swiper>
</template>

<script>
	import ListItem from "./list-item.vue"
	export default {
		name:"list",
		props:{
			tab:{
				type:Array,
				default(){
					return [];
				}
			}
		},
		data() {
			return {
				
			};
		},
		mounted() {
		},
		components:{
			ListItem:ListItem
		}
	}
</script>

<style lang="scss">
	.home-swiper{
		height: 100%;
		.swiper-item{
			height: 100%;
			overflow: hidden;
			
		}
	}
</style>
