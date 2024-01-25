<template>
   
   <div class="container">
      
      
      <div class="d-flex gap-5 ">
         <div class="d-none" id="roundEl">
            <h3>Round <span id="roundNumber"></span></h3>
         </div>
         <!-- <div class="" id="roundEl">
            <h3>Round <span id="roundNumber"></span></h3>
         </div> -->

      </div>


      <h1>Play</h1>
      <select v-model="characterSelected" @change="characterId()" class="m-3" v-if="!playerData">
         <label for="character">Select your character</label>
         <option v-for="character in this.store.characters" class="m-3" :value="character.id">{{ character.name }}</option>
      </select>

      
      <div v-if="playerData">
         <div class="d-flex gap-5 ">
            <div class="card mb-3" id="playerCard">
               <h1>{{ playerData.name }}</h1>
               <h3>Stats</h3>
               <div class="d-flex gap-5">
                  <h4>Life: {{ playerData.life }}</h4>
                  <h4>Att: {{ playerData.attack }}</h4>
                  <h4>Def: {{ playerData.defence }}</h4>
                  <h4>Speed: {{ playerData.speed }}</h4>
               </div>
               <h2>Current Life: <span id="playerLife"></span></h2>
               <div v-for="item in playerData.items">
                  <!-- <p>{{ item.name }}</p> -->
                  <img :src="item.img" :alt="item.name">
                  
               </div>
            </div>
            <div v-if="computerData">
               <div class="card mb-3"  id="computerCard">
                  <h1>{{ computerData.name }}</h1>
                  <h3>Stats</h3>
                  <div class="d-flex gap-5">
                     <h4>Life: {{ computerData.life }}</h4>
                     <h4>Att: {{ computerData.attack }}</h4>
                     <h4>Def: {{ computerData.defence }}</h4>
                     <h4>Speed: {{ computerData.speed }}</h4>
                  </div>
                  <h2>Current Life: <span id="computerLife"></span></h2>
                  <div v-for="item in computerData.items">
                  <!-- <p>{{ item.name }}</p> -->
                  <img :src="item.img" :alt="item.name">
                  
               </div>
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

            const currentCard = document.querySelector(`#${id}Card`);

            setTimeout(() => {
               // currentCard.textContent = 'sdafadsf';
               currentCard.classList.add('card_active');

            }, 4000)
            setTimeout(() => {
               def.life -= att.attack;

               document.querySelector(`#${id}Life`).textContent = def.life;

               currentCard.classList.remove('card_active');

               resolve();
            }, 4000)
         })
      },

      async startRound(round) {
         return new Promise((resolve) => {
            const roundCounterEl = document.querySelector('#roundEl');
            
            setTimeout(() => {
               document.querySelector('#roundNumber').textContent = round;
               roundCounterEl.classList.remove('d-none');
               console.log('Round1');
               
            }, 2000)
            setTimeout(() => {
               roundCounterEl.classList.add('d-none');

               console.log('Round2');
               resolve();
            }, 4000)
         })
      },

      async startBattle(playerData, computerData) {

         let player = { ...playerData };
         let computer = { ...computerData };

         let gameOver = false;
         let round = 1;
         let turn = 0;
         let playerTurn = true;

         playerData.speed < computerData.speed ? playerTurn = false : '';

         const computerId = "computer";
         const playerId = "player";


         const currentComputerLife = document.querySelector('#computerLife');
         currentComputerLife.textContent = computer.life;

         const currentPlayerLife = document.querySelector('#playerLife');
         currentPlayerLife.textContent = player.life;

         // console.log('round 1')

         while (!gameOver) {
            console.log(playerTurn);
            
            if (turn % 2 === 0) {
               await this.startRound(round);

               // console.log('round: ' + round);
               
               round++
            }
            
            turn++;
            
            
            if (playerTurn) {
               await this.startTurn(player, computer, computerId);
            } else {
               await this.startTurn(computer, player, playerId);
            };
            playerTurn = !playerTurn;
            
            if (player.life <= 0 || computer.life <= 0) {
               gameOver = true;
            };
            console.log('turn: ' + turn);
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
 
<style lang="scss" scoped>

.card_active
{
   // transition: 1s;
   transform: scale(1.1);
}


</style>