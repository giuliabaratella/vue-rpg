<template>
  <LoaderComponent
    v-if="store.charactersLoading || store.typesLoading || store.itemsLoading"
  />
  <ScrollUpBtn />
  <NavbarComponent />
  <router-view :key="$route.path"></router-view>
  <FooterComponent />
</template>

<script>
import axios from "axios";
import { store } from "@/data/store";

import NavbarComponent from "./assets/components/NavbarComponent.vue";
import FooterComponent from "./assets/components/FooterComponent.vue";
import ScrollUpBtn from "./assets/components/ScrollUpBtn.vue";
import LoaderComponent from "./assets/components/LoaderComponent.vue";
export default {
  components: {
    NavbarComponent,
    FooterComponent,
    ScrollUpBtn,
    LoaderComponent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    allCharacters() {
      axios.get(store.apiUrl + "/characters").then((res) => {
        console.log(res.data.results);
        this.store.characters = res.data.results;
        this.store.charactersLoading = false;
      });
    },
    getAllTypes() {
      axios.get(store.apiUrl + "/types").then((res) => {
        console.log(res.data);
        this.store.types = res.data.results;
        this.store.typesLoading = false;
      });
    },
    getAllItems() {
      axios.get(store.apiUrl + "/items").then((res) => {
        console.log(res.data);
        this.store.items = res.data.results;
        this.store.itemsLoading = false;
      });
    },
  },
  mounted() {
    this.allCharacters();
    this.getAllTypes();
    this.getAllItems();
  },
};
</script>

<style lang="scss" scoped></style>
