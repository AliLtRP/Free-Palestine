<template>
    <NavBar />
    <div class="home">
        <MidCont />
        <His />
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
import MidCont from '../mid/MidContentComp.vue'
import His from '../mid/historyConf.vue'

export default {
    name: 'HomeComp',
    components: {
        NavBar,
        MidCont,
        His
    }
}
</script>

<style>

*{
    font-family: 'Nunito', sans-serif;
}

.home {
    height: 200vh;
    display: flex;
    flex-direction: column;
    justify-content: end;

}


@media screen and (max-width: 414px) {

}

</style>