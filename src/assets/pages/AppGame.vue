<template>
   <div>
      ciao
      <button @click="generateComputerCard()">Genera</button>
      <button @click="startBattle()">Inizia</button>
   </div>
</template>
 
<script>
export default {
   name: 'AppGame',
   data() {
      return {
         playerCard:
         {
            name: 'Warrior',
            life: 100,
            attack: 40,
            defense: 70
         },
         computerCard: null,
         results: "",
         round: 0
      }
   },
   methods: {
      startBattle() {
         this.computerCard = this.generateComputerCard();
         this.playerCard.life += this.playerCard.defense;
         this.playerCard.life -= this.computerCard.attack;
         console.log(this.playerCard);
         this.computerCard.life += this.computerCard.defense;
         this.computerCard.life -= this.playerCard.attack;
         console.log(this.computerCard);
         this.results = this.compareCards(this.playerCard, this.computerCard);
         console.log(this.results);
      },

      //genera carta random computer
      generateComputerCard() {
         const names = ['Warrior', 'Sorcerer', 'Rogue', 'Paladin'];
         const randomName = names[Math.floor(Math.random() * names.length)];
         console.log(randomName);
         const randomAttack = Math.floor(Math.random() * 100);
         console.log(randomAttack);
         const randomDefense = Math.floor(Math.random() * 100);
         console.log(randomDefense);
         const randomLife = Math.floor(Math.random() * 100);
         console.log(randomLife);
         return {
            name: randomName,
            life: randomLife,
            attack: randomAttack,
            defense: randomDefense,
         }
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
   }
}
</script>
 
<style lang="scss" scoped></style>