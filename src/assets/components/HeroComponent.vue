<template>
    <!-- hero  -->
    <div id="hero">
        <div class="container">
            <div class="hero-text">
                <p class="mb-4">A long submerged evil stirs beneath the surface. <br> Join the battle for the future!</p>
                <button class="text-uppercase fw-bold fs-3">Play Now</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HeroComponent',
        
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

#hero{
    width: 100%;
    height: 1000px;
    background-image: url(../images/hero-bg.jpg);
    background-size: cover;
    background-position: bottom;
    .container{
        position: relative;
        height: 100%;
        .hero-text{
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 250px;
            left: 50%;
            transform: translate(-50%, 0);
            p{
                font-size: 4em;
                font-weight: 600;
                text-shadow: 2px 2px 5px rgba(0,0,0,0.9);
            }
        }
    }
}
</style>