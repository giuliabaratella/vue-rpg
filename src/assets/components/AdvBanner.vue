<template>
    <!-- adv banner  -->
    <div class="container-fluid">
        <section id="adv-banner">
            <div class="row justify-content-center">
                <div class="col-10 banner d-flex flex-column align-items-center justify-content-center">
                    <div class="banner-text text-center">
                        <h2 class="mb-4 text-uppercase ">70%Off!</h2>
                        <button class="text-uppercase fw-bold fs-3 gold-button">Get Coins</button>
                    </div>
                    <div class="banner-item-1">
                        <img src="../images/chest.png" alt="banner-item">
                    </div>
                    <div class="banner-item-2">
                        <img src="../images/coins.png" alt="banner-item">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name:'AdvBanner',
        
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container-fluid{
    background-image: url('../images/home-middle-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.row{
    margin: 0 !important;
    .banner {

    background: $color-fade-1;
    border: 5px solid $color-primary;
    border-radius: 10px;
    position:relative;
    overflow: hidden;
    margin-bottom: 100px;

    .banner-text{
        padding-top: 120px;
        padding-bottom: 120px;
        z-index: 1000;
        
        h5{
            font-size: 1.5em;
        }
        h2{
            font-size: 5em;
            color: $color-primary;
        }
    }
    .banner-item-1{
        z-index: 500;
        position: absolute;
        left: -20px;
        bottom: -20px;
        display: none;
        width: 40%;
    }
    .banner-item-2{
        z-index: 400;
        position: absolute;
        right: -300px;
        top: 20px;
        display: none;
        width: 50%;
    }
    @media screen and (min-width:1700px){
        .banner-item-1, .banner-item-2{
            display:block;
        }
    }
}
}



</style>