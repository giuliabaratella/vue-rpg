<template>
  <!-- Items carousel  -->
  <section class="container-fluid">
    <div class="container">
      <div class="section-label">
        <img src="../images/rpg_logo_high_white.png" alt="logo" />
        <h3>Most valuable items</h3>
      </div>

      <div class="row justify-content-center">
        <Carousel :autoplay="3000" v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" :itemsToShow="5"
          class="py-5">
          <slide v-for="(item, index) in store.items" :key="index">
            <router-link :to="{ name: 'single-item', params: { slug: item.slug } }">
              <div class="h-100 w-100 item-icon overflow-hidden ">
                <img :src="store.imagePath + item.img" :alt="item.name" />
              </div>

            </router-link>
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
@use "../styles/partials/variables" as *;

.container-fluid {
  background-image: url('../images/bg-coming-soon.png');
  background-repeat: no-repeat;
  background-size: 1200px;
  background-position: center;
}

.carousel__slide {
  padding: 10px;
}

p {
  font-size: 1.5rem;
}

.item-icon {
  border: 1px solid $color-primary;
  border-radius: 10px;

  &:hover {
    transition: all 0.3s;
    filter: brightness(70%);
    transform: scale(1.05);
  }
}
</style>
