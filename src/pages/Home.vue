<template>
<main class="main">
    <Upcoming />
    <Movies/>
    <Tvs/>
    <TopRated/>
</main>
</template>
<script>
import Upcoming from '@/components/Upcoming/Upcoming.vue'
import Movies from '@/components/Movies/Movies.vue'
import Tvs from '@/components/Tvs/Tvs.vue'
import TopRated from '@/components/Top10/TopRated.vue'
export default {
  components: { Upcoming, Movies, Tvs, TopRated },
  
}
</script>
<style lang="scss">
    
</style>