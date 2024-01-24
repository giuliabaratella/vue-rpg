<template>
  <NavbarComponent/>
  <router-view :key="$route.path"></router-view>
  <FooterComponent/>
</template>

<script>
import NavbarComponent from './assets/components/NavbarComponent.vue';
import FooterComponent from './assets/components/FooterComponent.vue';
export default {
  components: {
    NavbarComponent,
    FooterComponent
  },
  data() {
    return {

    }
  }

}
</script>

<style lang="scss" scoped></style>