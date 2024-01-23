<template>
   <div class="container text-center">
      <h1 class="m-3">Characters</h1>
      <div class="row row-cols-5 g-3 justify-content-center">
         <div v-for="character in this.store.characters">
            <router-link :to="{ name: 'single-character', params: { slug: character.slug } }" class="link">
               {{ character.name }}
            </router-link>
         </div>
      </div>
   </div>
</template>

<script>
import { store } from '@/data/store';
import axios from 'axios';
export default {
   name: 'AppCharacter',
   data() {
      return {
         store
      }
   },
   methods: {
      allCharacters() {
         axios.get(store.apiUrl + '/characters')
            .then((res) => {
               console.log(res.data.results);
               this.store.characters = res.data.results
            })
      }
   },
   mounted() {
      this.allCharacters()
   }
}
</script>

<style lang="scss" scoped></style>