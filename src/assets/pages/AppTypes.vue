<template>
  <div class="container-fluid pb-5">
    <main class="container text-center py-5">
      <h1 class="mb-3">Types</h1>
      <p>
        Discover all our playable classes! <br />Click on the relative icon to
        learn all the details and see the related characters.
      </p>
      <div class="row g-4 justify-content-center w-50 mx-auto">
        <div
          v-for="type in this.store.types"
          class="col-6 col-md-4 col-lg-3 col-xl-2"
        >
          <router-link
            :to="{ name: 'single-type', params: { slug: type.slug } }"
            class="link"
          >
            <div class="type-card">
              <img :src="store.imagePath + type.img" :alt="type.name" />
              <h6>{{ type.name }}</h6>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "@/data/store";

export default {
  name: "AppTypes",

  components: {},

  data() {
    return {
      store,
    };
  },

  methods: {},

  mounted() {},
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.container-fluid {
  background-image: url('../images/all_character_page_02.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

}

h1 {
  color: $color-primary;
}
p {
  font-size: 1.3em;
}
.type-card {
  h6 {
    color: $color-primary;
    text-decoration: none !important;
  }
  &:hover {
    transition: all 0.3s;
    img {
      filter: brightness(130%);
    }
    transform: scale(1.05);
  }
}
</style>
