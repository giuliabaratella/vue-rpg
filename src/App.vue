<template>
  <NavbarComponent />
  <router-view :key="$route.path"></router-view>
  <AppFooter/>
</template>

<script>
import NavbarComponent from './assets/components/NavbarComponent.vue'
import AppFooter from './assets/components/AppFooter.vue';
export default {
  components: {
    NavbarComponent,
    AppFooter
  },
  data() {
    return {

    }
  }

}
</script>

<style lang="scss" scoped></style>