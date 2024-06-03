<template>
<Navbar />
<router-view></router-view>
</template>
<script>
import Navbar from './components/Navbar/Navbar.vue'

export default {
  components: { Navbar },

  }
</script>
<style lang="scss">

</style>