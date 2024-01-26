<template>
  <!-- Items carousel  -->
  <section>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 text-center">
          <h4>Most rated items</h4>
        </div>
        <Carousel
          :autoplay="3000"
          v-bind="settings"
          :breakpoints="breakpoints"
          :wrap-around="true"
          class="py-5"
        >
          <slide v-for="(el, index) in store.items" :key="index">
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
        itemsToShow: 1.5,
      },
      breakpoints: {
        700: {
          itemsToShow: 1.5,
        },
        1024: {
          itemsToShow: 2.5,
        },
        1280: {
          itemsToShow: 3.5,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel__slide {
  padding: 10px;
}
</style>
