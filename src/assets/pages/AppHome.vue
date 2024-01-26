<template>
    <HeroComponent/>
    <AboutComponent/>
    <AdvBanner/>
    <ComingCarouselComponent/>
</template>

<script>
import AdvBanner from '../components/AdvBanner.vue';
import HeroComponent from '../components/HeroComponent.vue';
import AboutComponent from '../components/AboutComponent.vue';
import ComingCarouselComponent from '../components/ComingCarouselComponent.vue';
    export default {
        name:'AppHome',
        components:{
            AdvBanner,
            HeroComponent,
            AboutComponent,
            ComingCarouselComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>