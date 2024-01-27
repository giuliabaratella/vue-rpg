<template>
  <a href="#" @click.prevent="scrollUp">
    <div class="scroll-up d-flex justify-content-center align-items-center">
      <i class="fas fa-angle-double-up"></i>
    </div>
  </a>
</template>

<script>
export default {
  name: "ScrollUpBtn",
  methods: {
    scrollUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.scroll-up {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 6000;
  width: 60px;
  height: 60px;
  background-color: $color-primary;
  border-radius: 10px;
  font-size: 1.3em;
}
a {
  color: $color-black !important;
  &:hover {
    color: $color-white !important;
  }
}
</style>
