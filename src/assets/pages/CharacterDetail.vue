<template>
  <div class="container-fluid">
    <div v-if="character">
      <main
        class="container py-5 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="row character-card p-3 mb-5 mx-3">
          <div class="col-md-4 col-lg-3 mb-lg-3 overflow-hidden pt-2">
            <img :src="store.imagePath + character.img" :alt="character.name" />
          </div>
          <div class="col-md-8 col-lg-9">
            <div class="d-flex justify-content-between">
              <div>
                <h1 class="m-0">{{ character.name }}</h1>
                <h5>{{ character.description }}</h5>
              </div>
              <div class="type-card text-center">
                <router-link
                  :to="{
                    name: 'single-type',
                    params: { slug: character.type.slug },
                  }"
                  class="link"
                >
                  <img
                    :src="store.imagePath + character.type.img"
                    :alt="character.type.name"
                  />
                  <h6 class="text-white">{{ character.type.name }}</h6>
                </router-link>
              </div>
            </div>
            <!-- stats  -->
            <div>
              <div class="d-flex mb-3">
                <div class="d-flex flex-column align-items-center">
                  <h4 mb-1>Att</h4>
                  <div class="stats-box">{{ character.attack }}</div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <h4 mb-1>Def</h4>
                  <div class="stats-box">{{ character.defence }}</div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <h4 mb-1>Speed</h4>
                  <div class="stats-box">{{ character.speed }}</div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <h4 mb-1>Life</h4>
                  <div class="stats-box">{{ character.life }}</div>
                </div>
              </div>
            </div>
            <!-- items  -->
            <div>
              <h4>Items:</h4>
              <div class="d-flex column-gap-3">
                <div v-for="item in character.items" class="text-center mb-3">
                  <div class="item-box mb-3">
                    <router-link
                      :to="{ name: 'single-item', params: { slug: item.slug } }"
                    >
                      <img :src="store.imagePath + item.img" :alt="item.name" />
                    </router-link>
                  </div>
                  <h6 class="text-white">{{ item.name }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <router-link :to="{ name: 'characters' }">
          <button class="gold-button">Back to Characters</button>
        </router-link>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "@/data/store";
export default {
  name: "CharacterDetail",
  data() {
    return {
      character: null,
      store,
    };
  },
  methods: {
    getCharacterData() {
      axios
        .get(this.store.apiUrl + "/characters/" + this.$route.params.slug)
        .then((res) => {
          // console.log(res.data);
          if (res.data.results) {
            this.character = res.data.results;
          } else {
            this.$router.push({ name: "not-found" });
          }
        });
    },
  },
  mounted() {
    this.getCharacterData();
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

.character-card {
  border: 1px solid $color-primary;
  border-radius: 20px;
  max-width: 1000px;
  overflow: hidden;
  background-image: url("../images/bg-logo-fade.png");
  background-repeat: no-repeat;
  background-size: 500px;
  background-position: center;
  background-color: $color-bg-dark;

  h1 {
    font-size: 4em;
    color: $color-primary;
  }

  .item-box {
    width: 100px;
    border: 1px solid $color-primary;

    &:hover {
      transition: all 0.3s;
      filter: brightness(70%);
      transform: scale(1.05);
    }
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
}

.type-card {
  width: 100px;

  &:hover {
    transition: all 0.3s;

    img {
      filter: brightness(130%);
    }

    transform: scale(1.05);
  }
}

a {
  text-decoration: none;
  color: $color-black;
}

@media screen and (max-width: 767px) {
  .character-card {
    background-image: none;
  }
}
</style>
