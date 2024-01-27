<template>
   <div class="container">

      <h1>Play</h1>
      <div class="row">

         <div class="col-4" :class="{ 'overflow-y-scroll': !playerData }" id="playerCard">

            <!-- <select v-model="characterSelected" @change="characterId()" class="m-3" v-if="!playerData">
               <label for="character">Select your character</label>
               <option v-for="character in this.store.characters" class="m-3" :value="character.id">{{ character.name }}
               </option>
            </select> -->

            <div class="m-3" v-if="!playerData">
               <div @click="selectCharacter(character)" v-for="character in this.store.characters">
                  <img :src="store.imagePath + character.img" :alt="character.name">
                  {{ character.name }}
               </div>
            </div>

            <div v-if="playerData">
               <h1>{{ playerData.name }}</h1>
               <h3>Stats</h3>
               <div class="d-flex gap-5">
                  <h4>Life: {{ playerData.life }}</h4>
                  <h4>Att: {{ playerData.attack }}</h4>
                  <h4>Def: {{ playerData.defence }}</h4>
                  <h4>Speed: {{ playerData.speed }}</h4>
               </div>

               <div>
                  <h2>Current Life: <span id="playerLife"></span></h2>
                  <div class="life_bar">
                     <div class="progress"></div>
                  </div>
               </div>

               <div v-for="item in playerData.items">
                  <!-- <p>{{ item.name }}</p> -->
                  <img :src="store.imagePath + item.img" :alt="item.name">

               </div>
            </div>

         </div>


         <div class="col-4" id="consoleCard">

            <div v-if="characterSelected" id="playerPreview">

               <div class="row justify-content-center ">
                  <div class="col-5">
                     <img :src="store.imagePath + characterSelected.img" :alt="characterSelected.name">
                  </div>

                  <div class="col-7">
                     <div class="ms-3">
                        <h3>{{ characterSelected.name }}</h3>
                        <h5>attack: {{ characterSelected.attack }}</h5>
                        <h5>defence: {{ characterSelected.defence }}</h5>
                        <h5>life: {{ characterSelected.life }}</h5>
                        <h5>speed: {{ characterSelected.speed }}</h5>

                        <div class="d-flex">
                           <div v-for="item in characterSelected.items">
                              <img class="w-50 " :src="store.imagePath + item.img" :alt="item.name">
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="col-8 mt-3">
                     <button @click="confirmCharacter()">Confirm</button>
                  </div>
               </div>

            </div>

            <div v-if="game" class="mb-3">
               <h1>Game: {{ game }}</h1>
               <h3>Computer: {{ countWinComputer }} - Player: {{ countWinPlayer }}</h3>
            </div>

            <h2 id="startPlayer" class="mb-3"></h2>

            <div class="d-flex gap-5 ">
               <div class="d-none" id="roundEl">
                  <img src="" alt="">
                  <h3>Round <span id="roundNumber"></span></h3>
               </div>
               <div v-if="results" class="mb-3">
                  <h1>{{ results }}</h1>
               </div>

            </div>
         </div>

         <div class="col-4" id="computerCard">

            <div v-if="!computerData && playerData">
               <button @click="generateComputerCharacter()">Genera</button>
            </div>

            <div v-if="computerData">
               <h1>{{ computerData.name }}</h1>
               <h3>Stats</h3>
               <div class="d-flex gap-5">
                  <h4>Life: {{ computerData.life }}</h4>
                  <h4>Att: {{ computerData.attack }}</h4>
                  <h4>Def: {{ computerData.defence }}</h4>
                  <h4>Speed: {{ computerData.speed }}</h4>
               </div>
               <div>
                  <h2>Current Life: <span id="computerLife"></span></h2>
                  <div class="life_bar">
                     <div class="progress"></div>
                  </div>
                  <div v-for="item in computerData.items">
                     <!-- <p>{{ item.name }}</p> -->
                     <img :src="store.imagePath + item.img" :alt="item.name">
                  </div>
               </div>
            </div>

         </div>

      </div>

      <div class="my-5" v-if="computerData && playerData && !results">
         <button @click="startBattle(this.playerData, this.computerData)">Inizia</button>
      </div>
      <div v-if="results" class="d-flex gap-5 my-5">
         <button @click="resetBattle()">Reset</button>
         <button @click="revengeBattle()">Revenge</button>
      </div>

   </div>
</template>
 
<script>
import axios from 'axios';
import { store } from '../../data/store';
export default {
   name: 'AppGame',
   data() {
      return {
         store,
         playerData: null,
         computerData: null,
         characterSelected: "",
         results: "",
         round: 0,
         game: 0,
         countWinComputer: 0,
         countWinPlayer: 0
      }
   },
   methods: {

      generateComputerCharacter() {
         const lastCharacterIndex = store.characters.length - 1;
         const randomIndex = Math.floor(Math.random() * lastCharacterIndex);
         this.computerData = store.characters[randomIndex];
         console.log(this.computerData);
      },

      allCharacters() {
         axios.get(store.apiUrl + '/characters')
            .then((res) => {
               console.log(res.data.results);
               this.store.characters = res.data.results
            })
      },

      // characterId() {
      //    console.log(this.characterSelected);
      //    this.store.characters.forEach(character => {
      //       // console.log(character);
      //       if (character.id == characterSelected) {
      //          this.playerData = character;
      //       }
      //    });
      //    console.log(this.playerData)
      // },

      selectCharacter(character) {
         this.characterSelected = character;
         console.log(this.characterSelected);
      },

      confirmCharacter() {
         this.playerData = this.characterSelected;

         document.querySelector('#playerPreview').classList.add('d-none');
      },


      async startTurn(att, def, idDef, idAtt, playerTurn, life) {
         return new Promise((resolve) => {


            document.querySelector('#startPlayer').textContent = `${idAtt} start`;
            const currentCardDef = document.querySelector(`#${idDef}Card`);
            const currentCardAtt = document.querySelector(`#${idAtt}Card`);
            // console.log(currentCardDef);
            // console.log(currentCardAtt);

            currentCardAtt.classList.remove('animation-dx');
            currentCardAtt.classList.remove('animation-sx');
            setTimeout(() => {
               if (playerTurn) {
                  currentCardAtt.classList.add('animation-dx');
               } else {
                  currentCardAtt.classList.add('animation-sx');
               }

            }, 3000)
            setTimeout(() => {
               document.querySelector('#startPlayer').classList.add('d-none');
               const defenceDamage = 1 - (def.defence / 100);
               console.log(defenceDamage);
               def.life -= att.attack * defenceDamage;
               console.log(def.life);

               let percent = def.life / life.life * 100;

               document.querySelector(`#${idDef}Life`).textContent = def.life > 0 ? def.life : '0';
               let progress = currentCardDef.querySelectorAll('.progress');

               progress[0].style.width = percent > 0 ? `${percent}%` : '0%';

               // currentCard.classList.remove('animation');

               resolve();
            }, 3000)
         })
      },

      async startRound(round) {
         return new Promise((resolve) => {
            const roundCounterEl = document.querySelector('#roundEl');

            setTimeout(() => {
               document.querySelector('#roundNumber').textContent = round;
               roundCounterEl.classList.remove('d-none');
               // console.log('Round1');

            }, 2000)
            setTimeout(() => {
               roundCounterEl.classList.add('d-none');

               // console.log('Round2');
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
               await this.startTurn(player, computer, computerId, playerId, playerTurn, computerData);
            } else {
               await this.startTurn(computer, player, playerId, computerId, playerTurn, playerData);
            };
            playerTurn = !playerTurn;

            if (player.life <= 0 || computer.life <= 0) {
               gameOver = true;
            };
            console.log('turn: ' + turn);
         };

         if (player.life <= 0) {
            this.results = 'computer win'
            this.countWinComputer++;
            console.log('computer win');
         } else if (computer.life <= 0) {
            this.results = 'player win';
            console.log('player win');
            this.countWinPlayer++;
         }
      },

      revengeBattle() {
         this.results = '';
         this.playerData = '';
         let progress = document.querySelectorAll('.progress');
         progress[1].style.width = '100%';
         document.querySelector('#computerLife').textContent = '';
         this.game++;
         this.selectCharacter();
      },
      resetBattle() {
         this.playerData = '';
         this.computerData = '';
         this.results = '';
         this.game = 0;
         this.selectCharacter();
      }

   },

   mounted() {
      this.allCharacters();
      // this.generateComputerCharacter();
   }
}
</script>
 
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.row>.col-4 {
   aspect-ratio: 1;
}

#computerCard,
#playerCard {
   background: $color-fade-1;

   img {
      height: auto;
      width: 4rem;
   }
}

#playerPreview {
   aspect-ratio: 1;
   background: $color-fade-1;
   border-radius: 1rem;
   margin: 2rem;
   padding: 1rem;

   // img
   // {
   //    width: 40%;
   // }
}


.animation-dx {
   position: relative;
   animation-name: attackDx;
   animation-duration: 0.3s;
}

@keyframes attackDx {
   0% {
      left: 0px;
      top: 0px;
   }

   50% {
      left: 50px;
      top: 0px;
   }

   100% {
      left: 0px;
      top: 0px;
   }
}

.animation-sx {
   position: relative;
   animation-name: attackSx;
   animation-duration: 0.3s;
}

@keyframes attackSx {
   0% {
      right: 0px;
      top: 0px;
   }

   50% {
      right: 50px;
      top: 0px;
   }

   100% {
      right: 0px;
      top: 0px;
   }
}

.progress {
   transition: 1s;
   width: 100%;
   background-color: $color-primary;
}

.zoom-in-out {
   animation: zoom-in-zoom-out 1s ease infinite;
}

@keyframes zoom-in-zoom-out {
   0% {
      transform: scale(1, 1);
   }

   50% {
      transform: scale(0.8, 0.8);
   }

   100% {
      transform: scale(1, 1);
   }
}
</style>