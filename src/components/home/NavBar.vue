<template>
    <header>
        <nav class="nav">

            <RouterLink to="/">
                <div class="logo">
                    <img v-bind:src="logo" class="logo-img" alt="palestine logo">
                </div>
            </RouterLink>


            <div class="side-nav">
                <RouterLink to="/about">about</RouterLink>
            </div>
        </nav>
    </header>
</template>


<script>
import logo from '../../assets/palestineLow-2.svg'
import { RouterLink } from 'vue-router';


export default {
    name: "logoImage",
    components: {
        RouterLink
    },
    data() {
        return {
            logo
        }
    },
}

</script>


<style>
html {
    height: 100vh;
}

body {
    width: 100%;
    height: 100vh;
    background: rgb(0, 17, 36);
    /* background: linear-gradient(0deg, rgba(0, 17, 36, 1) 0%, rgba(71, 59, 240, 1) 44%); */
}

header {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
}

.nav {
    height: inherit;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 30px;
    height: 70px;
}

.side-nav {
    width: 150px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.side-nav a {
    text-decoration: none;
    color: white;
}
</style>