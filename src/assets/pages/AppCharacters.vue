<template>
  <main class="container text-center py-5">
    <h1 class="mb-3">Characters</h1>
    <p>Discover all our playable characters!</p>
    <div class="row g-4 justify-content-center">
      <div
        v-for="character in this.store.characters"
        class="col-6 col-md-4 col-lg-3 col-xl-2"
      >
        <router-link
          :to="{ name: 'single-character', params: { slug: character.slug } }"
          class=""
        >
          <basicCard :el="character" />
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import { store } from "@/data/store";
import axios from "axios";
import basicCard from "../components/basicCard.vue";
export default {
  name: "AppCharacter",
  components: {
    basicCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

h1 {
  color: $color-primary;
}
p {
  font-size: 1.3em;
}
</style>
