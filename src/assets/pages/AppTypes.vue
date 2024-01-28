<template>
  <div class="container-fluid pb-5">
    <main class="container text-center py-5">
      <div class="pb-5">
        <div class="panel">
          <h1 class="jj">
            Types
          </h1>
          <h1 class="jj">
            Types
          </h1>
        </div>

        <p class="w-25 m-auto mb-2">
          Discover all our playable classes! <br />
          Learn all the details and see the related characters!
        </p>
      </div>
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
  background-image: url('../images/all_types_page_01.png');
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
