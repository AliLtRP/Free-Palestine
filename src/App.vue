<template>
  <body>
    <NavBar />
    <HomeComp />

  </body>
</template>


<script>
import HomeComp from './components/home/HomeComp.vue'
import NavBar from './components/home/NavBar.vue'

export default {
  name: 'App',
  components: {
    HomeComp,
    NavBar
  }
}

</script>


<style src="./assets/tailwind.css"/>