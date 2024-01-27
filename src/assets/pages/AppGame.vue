<template>
   <div class="container">

   <main class="container py-5">

      <h1 class="text-center">Play</h1>
      <div class="row">

         <div class="col-4" id="playerCard">

            <div class="flip-card-inner">

               <div class="flip-card-front" :class="{ 'overflow-y-scroll': !playerData }">
                  <h3 class="mt-2 text-center">Choose yout character</h3>
                  <div class="p-3">
                     <div class="row px-0" v-if="!playerData">
                        <div class="col-4 small-character-box" @click="selectCharacter(character)"
                           v-for="character in this.store.characters">
                           <img :src="store.imagePath + character.img" :alt="character.name">
                        </div>
                     </div>
                  </div>
               </div>

               <div class="flip-card-back">
                  <div v-if="playerData" class="row px-4">
                     <h3 class="col-12 my-4 ">{{ playerData.name }}</h3>
                     <div class="col-6 mb-3">
                        <h3>Stats</h3>
                        <div class="mb-3">
                           <h4>Life: {{ playerData.life }}</h4>
                           <h4>Att: {{ playerAttack }}</h4>
                           <h4>Def: {{ playerData.defence }}</h4>
                           <h4>Speed: {{ playerData.speed }}</h4>
                        </div>
                        <div class="item-img w-50">
                           <h4>Equipped:</h4>
                           <img :src="store.imagePath + playerItem.img" :alt="playerItem.name">
                        </div>

                     </div>
                     <div class="col-6 character-img">
                        <img :src="store.imagePath + playerData.img" :alt="characterSelected.name">
                     </div>
                     <div class="col-12 mb-3">
                        <h2>Current Life:
                           <span id="playerLife"></span>
                        </h2>
                        <div class="life_bar">
                           <div class="progress"></div>
                        </div>
                     </div>


                  </div>
               </div>

            </div>

         </div>


         <div class="col-4" id="consoleCard">

            <div id="msg-box" class="d-flex flex-column justify-content-center align-items-center">
               <div v-if="game" class="mb-3">
                  <h2>Game: {{ game }}</h2>
               </div>
               <h2 id="startPlayer" class="mb-3"></h2>
               <div class="d-none" id="roundEl">
                  <img src="" alt="">
                  <h2>Round <span id="roundNumber"></span></h2>
               </div>
               <div v-if="results" class="mb-3">
                  <h3>{{ results }}</h3>
               </div>

            </div>


            <div v-if="characterSelected" id="playerPreview">

               <div class="row justify-content-center ">
                  <div class="col-5">
                     <img :src="store.imagePath + characterSelected.img" :alt="characterSelected.name">
                  </div>

                  <div class="col-7">
                     <div class="ms-3">
                        <h4>{{ characterSelected.name }}</h4>
                        <h5>attack: {{ characterSelected.attack }} <span id="playerAttackIncreased"></span></h5>
                        <h5>defence: {{ characterSelected.defence }}</h5>
                        <h5>life: {{ characterSelected.life }}</h5>
                        <h5>speed: {{ characterSelected.speed }}</h5>

                        <h6>Select one item</h6>
                        <div class="d-flex" id="selectItems">
                           <div @click="selectItem(item, characterSelected.attack, index)"
                              v-for="(item, index) in characterSelected.items">
                              <img class="w-50 " :src="store.imagePath + item.img" :alt="item.name">
                              <span>{{ item.attack }}</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="text-center mt-3">
                     <button class="gold-button" @click="confirmCharacter()">Confirm</button>
                  </div>
               </div>

            </div>

            <div v-if="game" class="mb-3 d-none" id="games">
               <h1>Game: {{ game }}</h1>
               <h3 v-if="computerCountWin || playerCountWin">Computer: {{ computerCountWin }} - Player: {{ playerCountWin }}</h3>
            </div>



         </div>

         <div class="col-4" id="computerCard">

            <div class="flip-card-inner">

               <div class="flip-card-front">
                  <div class="d-flex justify-content-center align-items-center h-100 w-100">
                     <div class="question-mark">?</div>
                  </div>
               </div>

               <div class="flip-card-back">
                  <div v-if="computerData" class="row px-4">
                     <h3 class="col-12 my-4 ">{{ computerData.name }}</h3>
                     <div class="col-6 mb-3">
                        <h3>Stats</h3>
                        <div class="mb-3">
                           <h4>Life: {{ computerData.life }}</h4>
                           <h4>Att: {{ computerAttack }}</h4>
                           <h4>Def: {{ computerData.defence }}</h4>
                           <h4>Speed: {{ computerData.speed }}</h4>
                        </div>
                        <div class="item-img w-50">
                           <h4>Equipped:</h4>
                           <img :src="store.imagePath + computerItem.img" :alt="computerItem.name">
                        </div>

                     </div>
                     <div class="col-6 character-img">
                        <img :src="store.imagePath + computerData.img" :alt="computerData.name">
                     </div>
                     <div class="col-12 mb-3">
                        <h2>Current Life:
                           <span id="computerLife"></span>
                        </h2>
                        <div class="life_bar">
                           <div class="progress"></div>
                        </div>
                     </div>


                  </div>
               </div>

            </div>

         </div>

      </div>

      <div class="text-center mt-5" v-if="onGoingBattle">
         <button class="gold-button" @click="startBattle(this.playerData, this.computerData)">Inizia</button>
      </div>
      <!-- <div class="my-5" v-if="computerData && playerData && !results">
         <button @click="startBattle(this.playerData, this.computerData)">Inizia</button>
      </div> -->
      <div v-if="results" class="d-flex gap-5 my-5">
         <button @click="resetBattle(), sendDataGame()">Reset</button>
         <button @click="revengeBattle(), sendDataGame()">Revenge</button>
      </div>

   </main>
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
         playerAttack: '',
         computerAttack: '',
         playerItem: '',
         computerItem: '',
         results: "",
         onGoingBattle: false,
         round: 0,
         game: 1,
         computerCountWin: 0,
         playerCountWin: 0
      }
   },
   methods: {

      allCharacters() {
         axios.get(store.apiUrl + '/characters')
            .then((res) => {
               console.log(res.data.results);
               this.store.characters = res.data.results
            })
      },

      selectCharacter(character) {
         this.characterSelected = character;
         console.log(this.characterSelected);
      },

      confirmCharacter() {
         if (this.playerAttack) {
            this.onGoingBattle = true;

            setTimeout(() => {
               this.playerData = this.characterSelected;
            }, 200)


            const lastCharacterIndex = store.characters.length - 1;
            const randomIndex = Math.floor(Math.random() * lastCharacterIndex);
            const rndCharacter = store.characters[randomIndex];

            rndCharacter.items[0].attack >= rndCharacter.items[1].attack ?
               this.computerItem = rndCharacter.items[0] :
               this.computerItem = rndCharacter.items[1];

            this.computerAttack = this.computerItem.attack + rndCharacter.attack;

            this.computerData = rndCharacter;

            document.querySelectorAll('.flip-card-inner')[0].classList.add('rotate_card');
            document.querySelectorAll('.flip-card-inner')[1].classList.add('rotate_card');

            document.querySelector('#playerPreview').classList.add('d-none');
         } else {
            console.log(document.querySelectorAll('#selectItems > div'))
            document.querySelectorAll('#selectItems > div')[0].classList.add('selectItemsAlerts');
            document.querySelectorAll('#selectItems > div')[1].classList.add('selectItemsAlerts');

         }
      },

      selectItem(item, characterAttack, i) {
         document.querySelectorAll('#selectItems > div')[0].classList.remove('selectItemsAlerts', 'active_items');
         document.querySelectorAll('#selectItems > div')[1].classList.remove('selectItemsAlerts', 'active_items');

         document.querySelectorAll('#selectItems > div')[i].classList.add('active_items');

         let totAttack = item.attack + characterAttack;
         document.querySelector('#playerAttackIncreased').textContent = `(${totAttack})`;
         this.playerAttack = totAttack;
         this.playerItem = item;
      },

      async startTurn(att, def, idDef, idAtt, playerTurn, life) {
         return new Promise((resolve) => {


            document.querySelector('#startPlayer').textContent = `${idAtt} start`;
            const currentCardDef = document.querySelector(`#${idDef}Card`);
            const currentCardAtt = document.querySelector(`#${idAtt}Card`);
            // console.log(currentCardDef);
            // console.log(currentCardAtt);
            setTimeout(() => {
               currentCardAtt.classList.add('zoom-in-out');
            }, 700)
            currentCardAtt.classList.remove('animation-dx');
            currentCardAtt.classList.remove('animation-sx');
            setTimeout(() => {
               if (playerTurn) {
                  currentCardAtt.classList.remove('zoom-in-out');
                  currentCardAtt.classList.add('animation-dx');
               } else {
                  currentCardAtt.classList.remove('zoom-in-out');
                  currentCardAtt.classList.add('animation-sx');
               }

            }, 3000)
            setTimeout(() => {
               document.querySelector('#games').classList.remove('d-none');
               document.querySelector('#startPlayer').classList.add('d-none');
               const defenceDamage = 1 - (def.defence / 100);
               console.log(defenceDamage)
               def.life -= att * defenceDamage;
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
         this.onGoingBattle = false;
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
         // currentComputerLife.textContent = computer.life;

         const currentPlayerLife = document.querySelector('#playerLife');
         // currentPlayerLife.textContent = player.life;

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
               await this.startTurn(this.playerAttack, computer, computerId, playerId, playerTurn, computerData);
            } else {
               await this.startTurn(this.computerAttack, player, playerId, computerId, playerTurn, playerData);
            };
            playerTurn = !playerTurn;

            if (player.life <= 0 || computer.life <= 0) {
               gameOver = true;
            };
            console.log('turn: ' + turn);
         };

         if (player.life <= 0) {

            this.results = 'computer win';
            this.computerCountWin++;
            console.log('computer win');
         } else if (computer.life <= 0) {
            this.results = 'player win';
            console.log('player win');
            this.playerCountWin++;
         }
      },

      revengeBattle() {
         document.querySelectorAll('.flip-card-inner')[0].classList.remove('rotate_card');
         // this.onGoingBattle = true;

         setTimeout(() => {
            this.playerData = '';
         }, 200)

         this.results = '';

         this.playerAttack = '';
         let progress = document.querySelectorAll('.progress');
         progress[1].style.width = '100%';
         document.querySelector('#computerLife').textContent = '';
         this.game++;
         this.selectCharacter();
      },
      resetBattle() {
         document.querySelectorAll('.flip-card-inner')[0].classList.remove('rotate_card');
         document.querySelectorAll('.flip-card-inner')[1].classList.remove('rotate_card');

         setTimeout(() => {
            this.playerData = '';
            this.computerData = '';
         }, 200)

         this.computerCountWin = 0;
         this.playerCountWin = 0;

         this.playerAttack = '';
         this.results = '';
         this.game = 0;
         this.selectCharacter();
      },
      
      sendDataGame() {
         const data = {
            computerCountWin: this.computerCountWin,
            playerCountWin: this.playerCountWin,
         }
         axios.post(store.apiUrl + '/games', data).then((response) => {
            console.log(response.data);
         }).catch((error) => {
            console.log('error', error);
         })
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
   // aspect-ratio: 1;
}

#computerCard,
#playerCard {
   background: $color-fade-1;

   height: 600px;

}



#playerPreview {

   // aspect-ratio: 1;
   h4 {
      font-size: 1.4em;
   }

   background: $color-fade-1;
   border-radius: 1rem;
   margin: 20px;
   padding: 1rem;
}

.selectItemsAlerts {
   border: solid 2px red;
}

.active_items {
   border: solid 2px green;
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
// flip card

.flip-card {
   background-color: transparent;
   width: 300px;
   height: 300px;
   perspective: 1000px;
}

.flip-card-inner {
   position: relative;
   width: 100%;
   height: 100%;
   transition: transform 0.5s;
   transform-style: preserve-3d;
   //   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

// .flip-card:hover .flip-card-inner {
//   transform: rotateY(180deg);
// }

.rotate_card {
   transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
   position: absolute;
   width: 100%;
   height: 100%;
   -webkit-backface-visibility: hidden;
   backface-visibility: hidden;

   .character-img {
      img {
         width: 100% !important;
         border: 2px solid $color-primary;
      }
   }
}

.flip-card-front {
   //   background-color: #bbb;
   //   color: black;
}

.flip-card-back {
   //   background-color: #2980b9;
   //   color: white;
   transform: rotateY(180deg);
}

.zoom-in-out {
   animation: zoom-in-out 1.5s ease infinite;
}

@keyframes zoom-in-out {
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

h1 {
   color: $color-primary;
   font-size: 4em;
}

.small-character-box {
   height: 140px;
   border: 1px solid $color-primary;
   // border-radius: 20%;
   overflow: hidden;

   img {
      width: 100% !important;
   }

   &:hover {
      cursor: pointer;
      filter: brightness(70%);
   }
}

.question-mark {
   font-size: 10em;
   animation: fade 3s infinite;

   @keyframes fade {

      50% {
         transform: scale(130%);
      }
   }
}

main {
   margin-bottom: 100px;
}

</style>