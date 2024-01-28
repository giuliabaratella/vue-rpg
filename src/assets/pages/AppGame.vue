<template>
   <div class="container">

   <main class="container py-5">

      <h1 class="text-center">Play</h1>
      <div class="row">

         <div class="col-4 p-0" id="playerCard">

            <div class="flip-card-inner">

               <div class="flip-card-front p-3" :class="{ 'overflow-y-scroll': !playerData }">
                  <h3 class="mt-2 text-center">Choose yout character</h3>
                  <div class="p-3">
                     <div class="row" v-if="!playerData">
                        <div class="col-4 p-1" @click="selectCharacter(character, index)"
                           v-for="(character, index) in this.store.characters">
                           <div class="small-character-box">
                              <img :src="store.imagePath + character.img" :alt="character.name">
                           </div>
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

                           <div class="item-attack">
                              <div class="d-none">
                                 <img :src="store.imagePath + playerItem.img" :alt="playerItem.name">
                              </div>
                           </div>
                        </div>

                     </div>
                     <div class="col-6 character-img">
                        <img :src="store.imagePath + playerData.img" :alt="playerData.name">
                     </div>
                     <div class="col-12 my-3">
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

               <div v-if="game" class="mb-3 d-none" id="games">
                  <h3 v-if="computerCountWin || playerCountWin">Player: {{ playerCountWin }} - Computer: {{ computerCountWin }}</h3>
               </div>

               <h2 id="startPlayer" class="mb-3"></h2>
               <div class="d-none" id="roundEl">
                  <!-- <img src="" alt=""> -->
                  <h2>Round <span id="roundNumber"></span></h2>
               </div>

               <div v-if="results" class="mb-3">
                  <h3>{{ results }}</h3>
               </div>

            </div>


            <div v-if="previewCharacter" id="playerPreview">

               <div class="row justify-content-center ">
                  <div class="col-5">
                     <img class="rounded-3" :src="store.imagePath + characterSelected.img" :alt="characterSelected.name">
                  </div>

                  <div class="col-7">
                     <div class="ms-1">
                        <h4>{{ characterSelected.name }}</h4>
                        <h5>life: {{ characterSelected.life }}</h5>
                        <h5>attack: {{ characterSelected.attack }} <span id="playerAttackIncreased"></span></h5>
                        <h5>defence: {{ characterSelected.defence }}</h5>
                        <h5>speed: {{ characterSelected.speed }}</h5>

                        <h6>Select one item</h6>
                        <div class="d-flex justify-content-start gap-4 " id="selectItems">
                           <div @click="selectItem(item, characterSelected.attack, index)"
                              v-for="(item, index) in characterSelected.items">
                              <img :src="store.imagePath + item.img" :alt="item.name">
                              <span>{{ item.attack }}</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="text-center mt-4">
                     <button class="gold-button" @click="confirmCharacter()">Confirm</button>
                  </div>
               </div>

            </div>




         </div>

         <div class="col-4 p-0" id="computerCard">

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

                           <div class="item-attack">
                              <div class="d-none">
                                 <img :src="store.imagePath + computerItem.img" :alt="computerItem.name">
                              </div>
                           </div>
                        </div>

                     </div>
                     <div class="col-6 character-img">
                        <img :src="store.imagePath + computerData.img" :alt="computerData.name">
                     </div>
                     <div class="col-12 my-3">
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
         <button class="gold-button" @click="startBattle(this.playerData, this.computerData)">Start Battle</button>
      </div>

      <div v-if="results" class="d-flex justify-content-center  gap-5 my-5">
         <button class="gold-button" @click="resetBattle(), sendDataGame()">Reset</button>
         <button class="gold-button" @click="revengeBattle(), sendDataGame()">Revenge</button>
      </div>
         
      </main>
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
         previewCharacter: false,
         characterSelected: '',
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

      selectCharacter(character, i) {
         this.characterSelected = character;
         this.previewCharacter = true;
         console.log(this.characterSelected);
         this.playerItem = '';
         this.playerAttack = '';
         
         const characterCard = document.querySelectorAll('.small-character-box');
         const item = document.querySelectorAll('#selectItems > div');


         for (let c = 0; c < this.store.characters.length; c++) {
               if (characterCard[c].classList.contains('active_items')) {
               characterCard[c].classList.remove( 'active_items');
            }
         };
         characterCard[i].classList.add( 'active_items');
         
         for (let t = 0; t < item.length; t++) {
            if (item[t].classList.contains('active_items')) {
               item[t].classList.remove( 'active_items');
               document.querySelector('#playerAttackIncreased').textContent = '';
            }
            if (item[t].classList.contains('select_items_alerts')) {
               item[t].classList.remove( 'select_items_alerts');
            }
         };

      },

      confirmCharacter() {
         if (this.playerAttack) {
            this.onGoingBattle = true;
            
            setTimeout(() => {
               this.playerData = this.characterSelected;
            }, 200)

            if (this.game == 1) {
               const lastCharacterIndex = store.characters.length - 1;
               const randomIndex = Math.floor(Math.random() * lastCharacterIndex);
               const rndCharacter = store.characters[randomIndex];
   
               rndCharacter.items[0].attack >= rndCharacter.items[1].attack ?
                  this.computerItem = rndCharacter.items[0] :
                  this.computerItem = rndCharacter.items[1];
   
               this.computerAttack = this.computerItem.attack + rndCharacter.attack;
   
               this.computerData = rndCharacter;

               //computer card
               document.querySelectorAll('.flip-card-inner')[1].classList.add('rotate_card');
            }

            //player card
            document.querySelectorAll('.flip-card-inner')[0].classList.add('rotate_card');

            this.previewCharacter = false;
         } else {
            console.log(document.querySelectorAll('#selectItems > div'))
            document.querySelectorAll('#selectItems > div')[0].classList.add('select_items_alerts');
            document.querySelectorAll('#selectItems > div')[1].classList.add('select_items_alerts');

         }
      },

      selectItem(item, characterAttack, i) {
         document.querySelectorAll('#selectItems > div')[0].classList.remove('select_items_alerts', 'active_items');
         document.querySelectorAll('#selectItems > div')[1].classList.remove('select_items_alerts', 'active_items');
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
            const currentItemAtt = currentCardAtt.querySelector(`.item-attack > div`);
            // console.log(currentCardDef);
            // console.log(currentCardAtt);
            setTimeout(() => {
               currentCardAtt.classList.add('zoom-in-out');
               currentItemAtt.classList.remove('d-none');
            }, 500)
            currentItemAtt.classList.remove('animation-dx');
            currentItemAtt.classList.remove('animation-sx');
            setTimeout(() => {
               if (playerTurn) {
                  currentItemAtt.classList.add('animation-dx');
               } else {
                  currentItemAtt.classList.add('animation-sx');
               }
               
            }, 2000)
            setTimeout(() => {
               document.querySelector('#games').classList.remove('d-none');
               document.querySelector('#startPlayer').classList.add('d-none');
               let defenceDamage = '';
               if (def.defence > 80) {
                  defenceDamage = 0.2;
               } else {
                  defenceDamage = 1 - (def.defence / 100);
               }
               
               console.log(defenceDamage)
               const defLife = Math.round(def.life -= att * defenceDamage);
               console.log(def.life);
               
               let percent = def.life / life.life * 100;
               
               document.querySelector(`#${idDef}Life`).textContent = defLife > 0 ? defLife : '0';
               let progress = currentCardDef.querySelectorAll('.progress');
               
               progress[0].style.width = percent > 0 ? `${percent}%` : '0%';
               
               // currentCard.classList.remove('animation');
               
            }, 2500)
            setTimeout(() => {
               currentCardAtt.classList.remove('zoom-in-out');
               currentItemAtt.classList.add('d-none');
               resolve();
            }, 3500)
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
         currentComputerLife.textContent = computer.life;

         const currentPlayerLife = document.querySelector('#playerLife');
         currentPlayerLife.textContent = player.life;


         while (!gameOver) {
            console.log(playerTurn);

            if (turn % 2 === 0) {
               await this.startRound(round);

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

         setTimeout(() => {
            this.playerData = '';
         }, 200)

         this.results = '';

         this.playerAttack = '';
         let progress = document.querySelectorAll('.progress');
         progress[1].style.width = '100%';
         document.querySelector('#computerLife').textContent = '';
         this.game++;
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
         this.game = 1;
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
      // this.allCharacters();
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

.item-img {
   // position: relative;
   
   img {
      border: 1px solid $color-primary;
   }
}

.item-attack {
   position: absolute;
   top: 300px;

   div {
      border: 1px solid $color-primary;
      width: 8rem;
   }
}

#playerCard .item-attack {
   left: 450px;
}

#computerCard .item-attack {
   right: 450px;
}

#playerPreview {

   h4 {
      font-size: 1.4em;
   }

   background: $color-fade-1;
   border-radius: 1rem;
   margin: 1rem;
   padding: 1rem;
}

#selectItems {
   
   div {
      position: relative;
      overflow: hidden;
      width: 3.5rem;
      border-radius: 10px;
      // aspect-ratio: 1;
   }

   img {
      object-fit: contain;
      width: 100%;
      height: 100%;
   }
   
   span {
      position: absolute;
      right: 5px;
      bottom: 0;

   }
}

.small-character-box {
   aspect-ratio: 1;
   padding: 0;

   border: 1px solid $color-primary;
   border-radius: 20%;
   overflow: hidden;

   img {
      // object-fit: cover;
      width: 100% !important;
      // height: 100% !important;
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

.select_items_alerts {
   // border: solid 2px red;
   box-shadow: 0px 0px 3px 4px red;

}

.active_items {
   // border: solid 2px green;
   box-shadow: 0px 0px 3px 4px $color-primary-hover;

}


.animation-dx {
   position: relative;
   animation-name: attackDx;
   animation-duration: 1.2s;
}

@keyframes attackDx {
   0% {
      left: 0px;
      top: 0px;
   }

   40% {
      left: 0px;
      top: 0px;
   }

   50% {
      left: 250px;
      top: 0px;
   }

   60% {
      left: 0px;
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
   animation-duration: 1.2s;
}

@keyframes attackSx {
   0% {
      right: 0px;
      top: 0px;
   }

   40% {
      right: 0px;
      top: 0px;
   }

   50% {
      right: 250px;
      top: 0px;
   }

   60% {
      right: 0px;
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
   // transition: 0.5s;
   // transform: scale(1.03);
   animation: zoom-in-zoom-out 3s ease ;
}

@keyframes zoom-in-zoom-out {
   0% {
      transform: scale(1);
   }

   5% {
      transform: scale(1.03);
   }

   95% {
      transform: scale(1.03);
   }

   100% {
      transform: scale(1);
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

h1 {
   color: $color-primary;
   font-size: 4em;
}


main {
   margin-bottom: 100px;
}

</style>