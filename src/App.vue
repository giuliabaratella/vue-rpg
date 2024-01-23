<template>
  <NavbarComponent />
  <router-view :key="$route.path"></router-view>
</template>

<script>
import NavbarComponent from './assets/components/NavbarComponent.vue'
export default {
  components: {
    NavbarComponent
  },
  data() {
    return {

    }
  }

}
</script>

<style lang="scss" scoped></style>