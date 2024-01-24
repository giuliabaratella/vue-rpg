<template>
    <HeroComponent/>
    <AdvBanner/>
</template>

<script>
import AdvBanner from '../components/AdvBanner.vue';
import HeroComponent from '../components/HeroComponent.vue';
    export default {
        name:'AppHome',
        components:{
            AdvBanner,
            HeroComponent
        }
        
    }
</script>

<style lang="scss" scoped>

</style>