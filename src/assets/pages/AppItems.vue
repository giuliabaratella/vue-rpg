<template>
  <div class="container-fluid">
    <div v-if="item"></div>
    <main class="container text-center py-5">
      <div class="panel">
        <h1 class="jj">
          Items
        </h1>
        <h1 class="jj">
          Items
        </h1>
      </div>
      <p class="w-25 m-auto mb-5 ">
        Find your perfect weapon! <br>Master one, or master them all.
      </p>
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
  </div>
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
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.container-fluid {
  background-image: url('../images/all_items_page_01.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}

p {
  font-size: 1.3em;
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
