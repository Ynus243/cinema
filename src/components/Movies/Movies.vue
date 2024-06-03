<template lang="pug">
section.main-media
    router-link(to="/movie").main-media-title
        span Фильмы
        img(src="@/assets/img/arrow.svg", alt="alt")
    Swiper(
      :modules="modules"
      :space-between="25"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
      
    )
      SwiperSlide(
        class="main-media-item"
        v-for="(movie, idx) in popularMovies"
         :key="movie.id"
         @click="getMovie(movie, idx)"
      )
        img(v-lazy="imageUrl + movie.poster_path", alt="alt")
      SwiperSlide()
        router-link(to="/movie" class="main-media-item")
          img(src="@/assets/img/arrow.svg", alt="alt").arrow
          span Все фильмы
    InfoBlock(
      
    )
</template>
<script>
import InfoBlock from '@/components/InfoBlock/InfoBlock.vue'
import { mapActions, mapState } from "vuex";
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from "swiper";
import 'swiper/scss'
import 'swiper/scss/navigation'
export default {
components: {Swiper, SwiperSlide, InfoBlock},
data() {
  return {
    modules: [Navigation],
    swiperOptions: {
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        576: {
          slidesPerView: 2
        },
        900: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4
        },
        1450: {
          slidesPerView: 5
        },
      }
    }
  }
},
methods: {
    ...mapActions('popularMovies', ['getPopular']),
    getMovie(movie, idx){
        
    }
},
computed: {
  ...mapState('popularMovies', ['popularMovies']),
  ...mapState(['imageUrl'])
},
  mounted() {
    this.getPopular()
  },
}
</script>
<style lang="scss">
    
</style>