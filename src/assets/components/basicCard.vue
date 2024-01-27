<template>
  <div class="card h-100 overflow-hidden">
    <img :src="store.imagePath + el.img" :alt="el.name" class="card-img-top" />
    <div class="card-body">
      <h5>{{ el.name }}</h5>
    </div>
  </div>
</template>

<script>
import { store } from "../../data/store";

export default {
  name: "basicCard",
  props: ["el"],
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.card {
  border: 1px solid $color-primary;
  .card-body {
    background-color: $color-bg-dark;
    h5 {
      color: $color-primary;
    }
  }
  &:hover {
    transition: all 0.3s;
    filter: brightness(70%);
    transform: scale(1.05);
  }
}
</style>
