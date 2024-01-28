<template>
  <div class="container-fluid">
    <main class="container text-center py-5">
      <div class="panel">
        <h1 class="jj">
          Characters
        </h1>
        <h1 class="jj">
          Characters
        </h1>
      </div>

      <p class="w-25 m-auto mb-4 ">
        Discover all our playable characters. Master one, or master them all.
      </p>
      <!-- searchbar -->
      <div class="d-flex justify-content-center mb-4">
        <div class="input-group mb-3 w-50 py-3 ">
          <input class="form-control" type="search" placeholder="              Search" aria-label="Search">
          <button class="btn btn-my-color" @click="search = ''">Reset</button>
          <button class="btn btn-my-color" type="submit" @click="setParams()">Search</button>
        </div>
      </div>


      <div class="row g-4 justify-content-center">

        <div v-if="!search" v-for="character in this.store.characters" class="col-6 col-md-4 col-lg-3 col-xl-2">
          <router-link :to="{ name: 'single-character', params: { slug: character.slug } }">
            <basicCard :el="character" />
          </router-link>
        </div>

        <div v-if="search" v-for="character in searchCharacter" class="col-6 col-md-4 col-lg-3 col-xl-2">
          <router-link :to="{ name: 'single-character', params: { slug: character.slug } }">
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
    setParams() {
      this.search = document.querySelector('input').value;
      console.log(document.querySelector('input').value)

      if (this.search) {
        //params.category = selectedCategory;  
        axios.get(store.apiUrl + '/characters', { params: { name: this.search } }).then((res) => {
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
  background-image: url("../images/all_character_page_03.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}

h1 {
  color: $color-primary;
  font-size: 4rem;
}

p {
  font-size: 1.3em;
}

input {
  background-color: transparent;
  background-image: url("../images/bg-logo-fade.png");
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: left 10px top 5px;
  border-color: $color-tertiary;
  color: $color-tertiary;

  &:focus {
    background-color: $color-bg-dark;
    background-image: none;
    color: $color-tertiary;
  }

  &:focus::placeholder {
    color: $color-bg-dark;
  }
}

::placeholder {
  color: $color-tertiary;

}

.btn-my-color {
  background-color: $color-black;
  border-color: $color-tertiary;
  color: $color-tertiary;
  border-left: none !important;
}

// -------------------animation


.panel {
  overflow: auto;
  width: 100%;
  height: 100px;
  position: relative;
}

.jj {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 4rem;
  color: $color-primary;
  line-height: .85;
  text-transform: uppercase;
  -webkit-text-fill-color: $color-primary;
  -webkit-background-clip: text;
  z-index: 10;



  &+& {
    -webkit-text-fill-color: $color-light-animation;
    z-index: 20;
    animation: meh 3s ease-out infinite alternate;

    @at-root {
      @keyframes meh {
        from {
          clip-path: polygon(100% 0, 100% 100%, 20% 100%, 61% 91%, 94% 47%);
        }

        50% {
          clip-path: polygon(100% 0, 100% 100%, 20% 100%, 59% 52%, 74% 13%);
        }

        to {
          clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 85%, 87% 41%);
        }
      }
    }
  }


}
</style>
