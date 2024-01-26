<template>
  <!-- Items carousel  -->
  <section>
    <div class="container">
      <div class="section-label">
        <img src="../images/rpg_logo_high_white.png" alt="logo" />
        <h3>Most rated items</h3>
      </div>

      <div class="row justify-content-center">
        <Carousel
          :autoplay="3000"
          v-bind="settings"
          :breakpoints="breakpoints"
          :wrap-around="true"
          class="py-5"
        >
          <slide v-for="(item, index) in store.items" :key="index">
            <basicCard :el="item" />
          </slide>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../../data/store";
import basicCard from "./basicCard.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "ItemCarousel",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    basicCard,
  },
  data() {
    return {
      store,
      settings: {
        itemsToShow: 5,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel__slide {
  padding: 10px;
}
p {
  font-size: 1.5rem;
}
</style>
