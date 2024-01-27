<template>
    <!-- About  -->
    <div class="container-fluid container-logo pb-5">
        <section class="container">
            <div class="section-label mb-5">
                <img src="../images/rpg_logo_high_white.png" alt="logo" />
                <h3>Our Story ...</h3>
            </div>
            <div class="row justify-content-between">
                <div class="col-lg-6 col-md-12 mb-4">
                    <h1>A New Era Has Begun</h1>
                    <p class="pe-5">
                        Our Story is set in the land of Orsterra,
                        which was created by thirteen deities.
                        One of them, the fallen god Galdera, was sealed away within
                        the afterworld by the other deities after he refused
                        to relinquish what they created.
                    </p>
                </div>
                <div class="col-lg-6 col-md-12 overflow-hidden">
                    <video src="../images/videoplayback.mp4" no-controls autoplay muted loop class="shadow-lg">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    </div>
    <div class="container-fluid container-fade pb-5">

    </div>
</template>

<script>
export default {
    name: 'AboutComponent',

}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.container-logo {
    background-color: $color-bg-dark;
    background-image: url(../images/bg-logo-fade.png);
    background-repeat: no-repeat;
    background-size: 700px;
    background-position: center;
}

.container-fade {
    background-color: $color-bg-dark;
    -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}


h1{
    font-size: 4rem;
}

p{
    font-size: 1.5rem;
}
</style>