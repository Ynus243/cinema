<template lang="pug">
section.main-media
    router-link(to="/tv").main-media-title
        span Сериалы
        img(src="@/assets/img/arrow.svg", alt="alt")
    Swiper(
      :modules="modules"
      :space-between="23"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
      
    )
      SwiperSlide(
        class="main-media-item"
        v-for="(tv, idx) in popularTvs"
         :key="tv.id"
         @click="getTv(tv, idx)"
      )
        img(v-lazy="imageUrl + tv.poster_path", alt="alt")
      SwiperSlide()
        router-link(to="/tv" class="main-media-item")
          img(src="@/assets/img/arrow.svg", alt="alt").arrow
          span Все сериалы
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
    ...mapActions('popularTvs', ['getPopular']),
    getTv(tv, idx){
        
    }
},
computed: {
  ...mapState('popularTvs', ['popularTvs']),
  ...mapState(['imageUrl'])
},
  mounted() {
    this.getPopular()
  },
}
</script>
<style lang="scss">
    
</style>