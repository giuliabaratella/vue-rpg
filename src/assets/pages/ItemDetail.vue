<template>
  <div v-if="item" class="container-fluid">
    <main
      class="container py-5 d-flex flex-column justify-content-center align-items-center"
    >
      <div class="row item-card p-3 mb-5 mx-3 align-items-center ">
        <div class="col-md-4 col-lg-3 mb-lg-3">
          <div class="overflow-hidden rounded-3">
            <img :src="store.imagePath + item.img" :alt="item.name" />
          </div>
        </div>
        <div class="col-md-8 col-lg-9">
          <div class="d-flex justify-content-between">
            <div>
              <h1 class="m-0">{{ item.name }}</h1>
              <h5>{{ item.category }}</h5>
            </div>
            <div class="d-none d-lg-flex flex-column align-items-center">
              <h4 mb-1>Cost</h4>
              <div class="cost-box">{{ item.cost }}</div>
            </div>
          </div>

          <!-- stats  -->
          <div>
            <div class="d-flex mb-3 justify-content-between">
              <div class="d-flex">
                <div class="d-flex flex-column align-items-center">
                  <h4 mb-1>Att</h4>
                  <div class="stats-box">+{{ item.attack }}</div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <h4 mb-1>Wt</h4>
                  <div class="stats-box">{{ item.weight }}</div>
                </div>
              </div>
              <div class="d-flex d-lg-none flex-column align-items-center">
                <h4 mb-1>Cost</h4>
                <div class="cost-box">{{ item.cost }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- related characters  -->
      <div v-if="item.characters.length > 0" class="w-100">
        <h4 class="text-center mb-3">
          All characters with {{ item.name }} equipped
        </h4>
        <div class="row justify-content-center mb-5">
          <div
            v-for="character in item.characters"
            class="col-6 col-md-4 col-lg-3 col-xl-2 text-center mb-3"
          >
            <router-link
              :to="{
                name: 'single-character',
                params: { slug: character.slug },
              }"
            >
              <basicCard :el="character" />
            </router-link>
          </div>
        </div>
      </div>
      <router-link :to="{ name: 'items' }">
        <button class="gold-button">Back to Items</button>
      </router-link>
    </main>
  </div>
</template>

<script>
import basicCard from "../components/basicCard.vue";
import axios from "axios";
import { store } from "@/data/store";
export default {
  name: "ItemDetails",
  components: {
    basicCard,
  },
  data() {
    return {
      store,
      item: null,
    };
  },
  methods: {
    getItemData() {
      axios
        .get(this.store.apiUrl + "/items/" + this.$route.params.slug)
        .then((res) => {
          // console.log(res.data);
          if (res.data.results) {
            this.item = res.data.results;
          } else {
            this.$route.push({ name: "not-found" });
          }
        });
    },
  },
  mounted() {
    this.getItemData();
  },
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.container-fluid {
  background-image: url("../images/detail_character_page_01.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}



.item-card {
  background-image: url("../images/bg-logo-fade.png");
  background-repeat: no-repeat;
  background-size: 800px;
  background-position: center;
  background-color: $color-bg-dark;
  border: 1px solid $color-primary;
  border-radius: 20px;
  max-width: 1000px;
  overflow: hidden;

  h1 {
    font-size: 4em;
    color: $color-primary;
  }

  .stats-box {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: 1px solid $color-primary;
    font-size: 2em;
    background-color: $color-bg-dark;
  }
  .cost-box {
    background-color: $color-primary;
    color: $color-black;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
    font-weight: bold;
    font-style: italic;
    text-transform: uppercase;
    outline-offset: 4px;
    outline: 1px solid $color-primary-hover;
  }
}
</style>
