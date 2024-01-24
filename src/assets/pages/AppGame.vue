<template>
   <div>
      Giochiamo
      <select v-model="characterSelected" @change="CharacterId()">
         <option v-for="character in this.store.characters" class="m-3" :value="character.id">{{ character.name }}</option>
      </select>
      <div v-if="playerCard">
         {{ playerCard.name }}
         <div v-if="computerCard">{{ computerCard.name }}</div>
         <button @click="generateComputerCharacter()">Genera</button>
         <button @click="startBattle()">Inizia</button>
      </div>
   </div>
</template>
 
<script>
import axios from 'axios';
import { store } from '../../data/store';
export default {
   name: 'App',
   data() {
      return {
         store,
         playerCard: null,
         computerCard: null,
         characterSelected: "",
         results: "",
         round: 0
      }
   },
   methods: {
      // startBattle() {
      //    this.computerCard = this.generateComputerCard();
      //    this.playerCard.life += this.playerCard.defense;
      //    this.playerCard.life -= this.computerCard.attack;
      //    console.log(this.playerCard);
      //    this.computerCard.life += this.computerCard.defense;
      //    this.computerCard.life -= this.playerCard.attack;
      //    console.log(this.computerCard);
      //    this.results = this.compareCards(this.playerCard, this.computerCard);
      //    console.log(this.results);
      // },

      //genera carta random computer
      generateComputerCharacter() {
         axios.get(store.apiUrl + '/characters')
            .then((res) => {
               const lastCharacterIndex = res.data.results.length - 1;
               const randomIndex = Math.floor(Math.random() * lastCharacterIndex);
               console.log(randomIndex);
               console.log(res.data.results.length);
               console.log(res.data.results);
               this.computerCard = res.data.results[randomIndex];
               console.log(this.computerCard);
               console.log(this.computerCard.life);
               // this.computerCard.life -= 10;
               // console.log(this.computerCard);
            })
      },
      allCharacters() {
         axios.get(store.apiUrl + '/characters')
            .then((res) => {
               console.log(res.data.results);
               this.store.characters = res.data.results
            })
      },
      CharacterId() {
         // console.log(this.characterSelected);
         this.store.characters.forEach(character => {
            // console.log(character);
            if (character.id == this.characterSelected) {
               this.playerCard = character;
            }
         });
         console.log(this.playerCard)
      },
      compareCards(playerCard, computerCard) {
         if (playerCard.life > computerCard.life) {
            return "Hai vinto";
         } else if (playerCard.life < computerCard.life) {
            return "Hai perso";
         } else {
            return "Pareggio";
         }
      }
   },
   mounted() {
      this.allCharacters();
      // this.generateComputerCharacter();
   }
}
</script>
 
<style lang="scss" scoped></style>