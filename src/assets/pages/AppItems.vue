<template>
  <div v-if="item"></div>
  <main class="container text-center py-5">
    <h1 class="mb-3">Items</h1>
    <p>Find your perfect weapon!</p>
    <div class="row g-4 justify-content-center">
      <div
        v-for="item in this.store.items"
        class="col-6 col-md-4 col-lg-3 col-xl-2"
      >
        <router-link :to="{ name: 'single-item', params: { slug: item.slug } }">
          <basicCard :el="item" />
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { store } from "@/data/store";
import basicCard from "../components/basicCard.vue";

export default {
  name: "AppItems",
  components: {
    basicCard,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getAllItems() {
      axios.get(store.apiUrl + "/items").then((res) => {
        console.log(res.data);
        this.store.items = res.data.results;
      });
    },
  },
  mounted() {
    this.getAllItems();
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
