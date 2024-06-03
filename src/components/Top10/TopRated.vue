<template lang="pug">
section.main-rate
    h2 ТОП
        span 10
    Swiper(
      :modules="modules"
      :space-between="1"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
      class="main-rate-block"
    )
        SwiperSlide(
            class="main-rate-item"
            v-for="(item, idx) in topRated" :key="item.id"
        )
            .main-rate-info 
                span {{ idx + 1 }}
                img(:src="imageUrl + item.poster_path", alt="alt")
</template>
<script>
import { mapActions, mapState } from "vuex";
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from "swiper";
import 'swiper/scss'
import 'swiper/scss/navigation'
export default {
components: {Swiper, SwiperSlide},
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
          slidesPerView: 3
        },
        1450: {
          slidesPerView: 3
        },
      }
    }
  }
},
methods: {
    ...mapActions('topRate', ['getTop']),
},
computed: {
  ...mapState('topRate', ['topRated']),
  ...mapState(['imageUrl'])
},
  mounted() {
    this.getTop()
  },
}
</script>
<style lang="scss">
    
</style>