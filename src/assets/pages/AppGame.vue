<template>
   <div class="container">
      <h1>Play</h1>
      <select v-model="characterSelected" @change="characterId()" class="m-3" v-if="!playerData">
         <label for="character">Select your character</label>
         <option v-for="character in this.store.characters" class="m-3" :value="character.id">{{ character.name }}</option>
      </select>
      <div v-if="playerData">
         <div class="d-flex gap-5 ">
            <div class="card mb-3">
               <h1>{{ playerData.name }}</h1>
               <h3>Stats</h3>
               <div class="d-flex gap-5">
                  <h4>Life: {{ playerData.life }}</h4>
                  <h4>Att: {{ playerData.attack }}</h4>
                  <h4>Def: {{ playerData.defence }}</h4>
                  <h4>Speed: {{ playerData.speed }}</h4>
               </div>
               <h2>Current Life: <span id="playerLife"></span></h2>
            </div>
            <div v-if="computerData">
               <div class="card mb-3">
                  <h1>{{ computerData.name }}</h1>
                  <h3>Stats</h3>
                  <div class="d-flex gap-5">
                     <h4>Life: {{ computerData.life }}</h4>
                     <h4>Att: {{ computerData.attack }}</h4>
                     <h4>Def: {{ computerData.defence }}</h4>
                     <h4>Speed: {{ computerData.speed }}</h4>
                  </div>
                  <h2>Current Life: <span id="computerLife"></span></h2>
               </div>
            </div>
         </div>
         <div v-if="!computerData">
            <button @click="generateComputerCharacter()">Genera</button>
         </div>
         <div v-if="computerData && playerData">
            <button @click="startBattle(this.playerData, this.computerData)">Inizia</button>
         </div>
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
         playerData: null,
         computerData: null,
         characterSelected: "",
         results: "",
         round: 0,
      }
   },
   methods: {

      //genera carta random computer
      generateComputerCharacter() {
         axios.get(store.apiUrl + '/characters')
            .then((res) => {
               const lastCharacterIndex = res.data.results.length - 1;
               const randomIndex = Math.floor(Math.random() * lastCharacterIndex);
               console.log(res.data.results);
               this.computerData = res.data.results[randomIndex];
               console.log(this.computerData);
            })
      },

      allCharacters() {
         axios.get(store.apiUrl + '/characters')
            .then((res) => {
               console.log(res.data.results);
               this.store.characters = res.data.results
            })
      },

      characterId() {
         // console.log(this.characterSelected);
         this.store.characters.forEach(character => {
            // console.log(character);
            if (character.id == this.characterSelected) {
               this.playerData = character;
            }
         });
         console.log(this.playerData)
      },
      async startTurn(att, def, id) {
         return new Promise((resolve) => {
            setTimeout(() => {
               def.life -= att.attack;
               console.log('computer.life' + def.life);
               const currentLife = document.querySelector(`#${id}`);
               currentLife.textContent = def.life;
               // if (turn) {
               // } else {
               //    def.life -= att.attack;
               //    console.log('player.life' + att.life);
               //    this.round++;
               //    console.log('round' + this.round);
               // };
               // turn = !turn;
               // console.log('turn' + turn);
               resolve();
            }, 2000)
         })
      },
      async startBattle(playerData, computerData) {

         let player = { ...playerData };
         let computer = { ...computerData };

         let gameOver = false;
         let round = 1;
         let turn = true;

         const computerId = "computerLife";
         const playerId = "playerLife";

         while (!gameOver) {
            console.log('round' + round);

            if (turn) {
               await this.startTurn(player, computer, computerId);
            } else {
               await this.startTurn(computer, player, playerId);
               round++;
               console.log('round' + round);
            };
            turn = !turn;
            console.log('turn' + turn);

            if (player.life <= 0 || computer.life <= 0) {
               gameOver = true;
            };
         };

         if (player.life <= 0) {
            return console.log('computer win')
         } else if (computer.life <= 0) {
            return console.log('player win')
         }

      },
   },

   mounted() {
      this.allCharacters();
      // this.generateComputerCharacter();
   }
}
</script>
 
<style lang="scss" scoped></style>