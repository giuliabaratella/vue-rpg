<template>
    <main class="d-flex justify-content-center">
        <div class="mt-2 text-center">
            <div class="my-2">
                <h1> error 404 Page not found !</h1>
                <h3> Open a ticket to
                </h3>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <h3>marco</h3>
                        <img src="../../../images/marco.jpg" alt="" class="">
                    </div>
                    <div class="col-4 d-flex flex-column ">
                        <button class="gold-button m-auto p-5"><a href="https://slack.com/intl/it-it">Open a
                                ticket</a></button>
                        <h3>or click home to come back</h3>
                        <button class="gold-button m-auto"><a href="http://localhost:5174">Home</a></button>
                    </div>
                    <div class="col-4">
                        <h3>stefano</h3>
                        <img src="../../../images/stefano-img.jpg" alt="" class="">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
  
<script>
export default {
    name: 'NotFound',
    components: {
    },
    data() {
        return {
        };
    },
    methods: {
    },
    mounted() {
    }
}
</script>
  
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

main {
    background-image: url(../images/bg-coming-soon.jpg);
    height: 100vh;
    width: 100%;
}

// button {
//     background-color: $color-primary;
//     border-radius: 5px;

//     &:hover {
//         background-color: $color-primary-hover;
//     }

// }
</style>