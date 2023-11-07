<template>
  <body>
    <NavBar />
    <HomeComp />
    <MidContentComp />
    <prevHistory/>
  </body>
</template>



<script>
import HomeComp from './components/home/HomeComp.vue'
import NavBar from './components/home/NavBar.vue'
import MidContentComp from './components/mid/MidContentComp.vue'
import prevHistory from './components/mid/prevHistory.vue'


export default {
  name: 'App',
  components: {
    HomeComp,
    NavBar,
    MidContentComp,
    prevHistory
  }
}

</script>


<style src="./assets/tailwind.css"/>