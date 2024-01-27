<template>
  <HeroComponent />
  <AboutComponent />
  <CharacterCarouselComponent />
  <ItemCarousel />
  <AdvBanner />
  <ComingCarouselComponent />
</template>

<script>
import AdvBanner from "../components/AdvBanner.vue";
import ItemCarousel from "../components/ItemCarousel.vue";
import HeroComponent from "../components/HeroComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
import ComingCarouselComponent from "../components/ComingCarouselComponent.vue";
import CharacterCarouselComponent from "../components/CharacterCarouselComponent.vue";
export default {
  name: "AppHome",
  components: {
    AdvBanner,
    HeroComponent,
    AboutComponent,
    ItemCarousel,
    ComingCarouselComponent,
    CharacterCarouselComponent,
  },
};
</script>

<style lang="scss" scoped></style>
