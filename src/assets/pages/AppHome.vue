<template>
  <HeroComponent />
  <AboutComponent />
  <!-- <ItemCarousel /> -->
  <AdvBanner />
</template>

<script>
import AdvBanner from "../components/AdvBanner.vue";
import ItemCarousel from "../components/ItemCarousel.vue";
import HeroComponent from "../components/HeroComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
export default {
  name: "AppHome",
  components: {
    AdvBanner,
    HeroComponent,
    AboutComponent,
    ItemCarousel,
  },
};
</script>

<style lang="scss" scoped></style>
