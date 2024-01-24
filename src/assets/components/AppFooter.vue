<template>
  <footer>

    <div class="d-flex flex-column align-items-center ">
      <div class="d-flex ">
        <div v-for="icon in store.socialIcons" class=" d-flex align-items-center justify-content-center m-3"
          id="icon-cont">
          <i :class="icon" class="p-1"></i>
        </div>
      </div>
      <ul class="list-unstyled d-flex flex-row">
        <li class="m-2">
          <a href="#" >
            <p class="fs-6">Privacy Policy</p>
          </a>
        </li>
        <li class="m-2">
          <a href="#"><p class="fs-6">Terms of use</p></a>         
        </li>
        <li class="m-2">
          <a href="#" ><p class="fs-6">How we are</p></a>          
        </li>
        <li class="m-2">
          <a href="#" ><p class="fs-6">Contact Us</p></a>          
        </li>
      </ul>
      <!-- <div class="card bg-light">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
      </div> -->
      <div class="box text-center">
        <p>PlayStation Family Mark, "PS5 logo" and "PS4 logo" are registreted trademarks or trademarks of Sony Interactive
          Entertainment Inc. <br> Epic,Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services
          are trademarks and/or registered trademarks of Epic Games. All other trademarks are the property of their
          respective owners.</p>
      </div>
      <p>Copyright &#169; <span class="text-uppercase">boolean</span> All right Reserved</p>
    </div>
  </footer>
</template>
  
<script>
import { store } from '../../data/store'
import axios from "axios"
export default {
  name: 'AppFooter',

  data() {
    return {
      store
    }
  },
  methods: {
  }
}
</script>
  
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

footer {
  width: 100%;
  height: 400px;

  p {
    font-size: 0.5rem;
  }

  .box {
    width: 650px;
  }

  #icon-cont {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid $color-primary;
    padding: auto;
    color: $color-primary;
    
    &:hover {
      color: $color-primary-hover;
      cursor: pointer;
    }
  }

  i {
    // 
    font-size: 2rem;

  }

  a{
    text-decoration: none;
    color: white;
    &:hover{
      color: $color-primary-hover;
    }
  }
  
}</style>