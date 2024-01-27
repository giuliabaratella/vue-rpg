<template>
  <div class="container-fluid">
    <main class="container text-center py-5">
      <h1 class="mb-3">Characters</h1>
      <p>Discover all our playable characters!</p>

      <div class="d-flex justify-content-end">
        <div class="input-group mb-3 w-50 py-3 ">
          <input class="form-control" type="search" placeholder="Search by name" aria-label="Search">
          <button class="btn btn-my-color" @click="search = ''">Reset</button>
          <button class="btn btn-my-color" type="submit" @click="setParams()">Search</button>
        </div>
      </div>
      

      <div class="row g-4 justify-content-center">

        <div v-if="!search"
          v-for="character in this.store.characters"
          class="col-6 col-md-4 col-lg-3 col-xl-2"
        >
          <router-link
            :to="{ name: 'single-character', params: { slug: character.slug } }"
          >
            <basicCard :el="character" />
          </router-link>
        </div>
        
        <div v-if="search"
          v-for="character in searchCharacter"
          class="col-6 col-md-4 col-lg-3 col-xl-2"
        >
          <router-link
            :to="{ name: 'single-character', params: { slug: character.slug } }"
          >
            <basicCard :el="character" />
          </router-link>
        </div>

      </div>
    </main>
  </div>
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
      search: '',
      searchCharacter: [],
    };
  },

  methods: {
    setParams(){
      this.search = document.querySelector('input').value;
      console.log(document.querySelector('input').value )
      
      if(this.search){
          //params.category = selectedCategory;  
          axios.get(store.apiUrl + '/characters', {params: {name: this.search}}).then((res) => {
            console.log(res.data.results);
            this.searchCharacter = res.data.results;
          });                
      }
      //console.log(params);
      // getAllPosts(params);
    },
  }
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.container-fluid {
  background-image: url("../images/all_character_page_01.png");
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

input {
  background-color: $color-bg-dark;
  border-color: $color-tertiary;
  color: $color-tertiary;
}

.btn-my-color {
  background-color: $color-tertiary;
  border-color: $color-tertiary;
  color: $color-white;
  
}
</style>
