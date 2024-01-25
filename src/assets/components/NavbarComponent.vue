<template>
    <header>
        <nav class="navbar navbar-expand-lg p-0">
            <div class="container-fluid overflow-hidden ">
                <button id="navbar-toggler" class="navbar-toggler ms-1 my-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div id="logo" class="py-1 mx-1 me-4">
                        <img src="../images/rpg_logo_high_white.png" alt="rpg-logo">
                    </div>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" v-for="route in navroutes">
                            <router-link class="nav-link fs-5 me-3 fw-bold" :to="{ name: route.name }">
                                {{ route.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div id="buy-now">
                    <img src="../images/Y_-so0KcYkEE0aHtBn1jRuOEik.png" alt="buy-now-cta-button">
                </div>
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

nav {
    background-color: $color-bg-dark;

    #navbar-toggler {
        border-color: none !important;
        color: $color-tertiary;
        border-radius: none !important;
        padding: none !important;
        outline: 1px solid $color-tertiary;
        outline-offset: none !important;
        &:active{
            transform: scale(1.01);
        }
        &:hover{
            background-color: $color-bg-dark;
            border-radius: none !important;
            outline-offset: none !important;
            outline: 3px solid $color-secondary-blue;
            transition: all 0.5s;
        }
        .navbar-toggler-icon {
            filter: brightness(2.5);
            &:hover {
                filter: brightness(10);
                transition: all 0.5s;
            }
        }
    }

    #logo {
        width: 70px;
    }

    .nav-link {
    color: $color-tertiary;
    border-bottom: 3px solid transparent;
        &:hover {
            color: $color-white;
            border-color: $color-secondary-blue;
        }
    }

    #buy-now:hover {
        transform: scale(1.05);
        transition: all 0.5s;
        filter: brightness(1.1);
        cursor: pointer;
    }
}

</style>