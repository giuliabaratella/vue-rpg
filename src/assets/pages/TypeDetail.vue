<template>
  <div class="container-fluid">
    <div v-if="type">
      <main class="container py-5">
        <div class="row type-card p-3 mb-5 text-center">
          <div
            class="col-12 d-flex align-items-center justify-content-center mb-3"
          >
            <h1 class="me-3">{{ type.name }}</h1>
            <div>
              <img :src="store.imagePath + type.img" :alt="type.image" />
            </div>
          </div>
          <div class="col-12 w-50 m-auto">
            <div>{{ type.description }}</div>
          </div>
        </div>
        <!-- related characters  -->
        <div class="w-100">
          <h4 class="text-center mb-3">
            All characters with {{ type.name }} class
          </h4>
          <div class="row justify-content-center mb-5">
            <div
              v-for="character in type.characters"
              class="col-6 col-mb-4 col-lg-3 col-xl-2 text-center mb-3"
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
        <div class="text-center">
          <router-link :to="{ name: 'types' }">
            <button class="gold-button">Back to All Types</button>
          </router-link>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "@/data/store";
import basicCard from "@/assets/components/basicCard.vue";
export default {
  name: "TypeDetail",
  components: {
    basicCard,
  },
  data() {
    return {
      store,
      type: null,
    };
  },
  methods: {
    getTypeData() {
      axios
        .get(this.store.apiUrl + "/types/" + this.$route.params.slug)
        .then((res) => {
          if (res.data.results) {
            this.type = res.data.results;
          } else {
            this.$router.push({ name: "not-found" });
          }
        });
    },
  },
  mounted() {
    this.getTypeData();
  },
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.container-fluid {
  background-image: url('../images/detail_character_page_01.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}

.card {
  img-box {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  width: 200px;
  height: 300px;
  border: 1px solid $color-primary;

  &:hover {
    transition: all 0.3s;
    filter: brightness(70%);
    transform: scale(1.05);
  }
}

button {
  a {
    text-decoration: none;
    color: $color-black;
  }
}
h4 {
  color: $color-primary;
}
</style>
