<template>
    <HeroComponent/>
    <AboutComponent/>
    <AdvBanner/>
</template>

<script>
import AdvBanner from '../components/AdvBanner.vue';
import HeroComponent from '../components/HeroComponent.vue';
import AboutComponent from '../components/AboutComponent.vue';
    export default {
        name:'AppHome',
        components:{
            AdvBanner,
            HeroComponent,
            AboutComponent
        }
        
    }
</script>

<style lang="scss" scoped>

</style>