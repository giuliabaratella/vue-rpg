<template>
    <!-- About  -->
    <div class="container-fluid">
        <section class="container">
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
                <div class="col-lg-6 col-md-12 overflow-hidden ">
                    <video src="../images/videoplayback.mp4" no-controls autoplay muted loop>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AboutComponent',

}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.container-fluid {
    background-color: $color-bg-dark;
    background-image: url(../images/bg-logo-fade.png);
}


h1{
    font-size: 4rem;
}

p{
    font-size: 1.5rem;
}
</style>