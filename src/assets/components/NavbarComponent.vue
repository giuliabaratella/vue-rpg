<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" v-for="route in navroutes">
                            <router-link class="nav-link" :to="{ name: route.name }">
                                {{ route.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!-- <div>
                    <img src="../images/" alt="">
                </div> -->
            </div>
        </nav>
    </header>
</template>

<script>

export default {
    name: "NavbarComponent",
    components: {
    },
    data() {
        return {
            navroutes:
                [
                    {
                        label: "Home",
                        name: "home",
                    },
                    {
                        label: "Characters",
                        name: "characters",
                    },
                    {
                        label: "Items",
                        name: "items",
                    },
                    {
                        label: "Types",
                        name: "types",
                    },
                    {
                        label: "Game",
                        name: "game",
                    },
                ]
        }
    },
};
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

</style>