<template>
  <div id="loader">
    <div class="img-box">
      <img src="../images/bg-logo-fade.png" alt="logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LoaderComponent",
};
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

#loader {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: $color-bg-dark;
  display: flex;
  justify-content: center;
  align-items: center;
  .img-box {
    width: 50%;
    height: 50%;
    animation: fade 2s infinite;
    @keyframes fade {
      0% {
        opacity: 100%;
      }
      50% {
        opacity: 30%;
        transform: scale(200%);
      }
    }
  }

  z-index: 8000;
}
</style>
