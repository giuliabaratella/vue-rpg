<template>
   <main class="container text-center py-5">
      <h1 class="mb-3">Characters</h1>
      <p>Discover all our playable characters!</p>
      <div class="row g-4 justify-content-center">
         <div v-for="character in this.store.characters" class="col-2">
            <router-link :to="{ name: 'single-character', params: { slug: character.slug } }" class="">
               <CharacterCard :character="character" />
            </router-link>
         </div>
      </div>
   </main>
</template>

<script>
import { store } from '@/data/store';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard.vue';
export default {
   name: 'AppCharacter',
   components: {
      CharacterCard,
   },
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

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

h1{
   color: $color-primary;
}
p  {
   font-size: 1.3em;
}

</style>