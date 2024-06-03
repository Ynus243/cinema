<template lang="pug">
Transition(name="main-upcoming-item" mode="out-in")
    .main-upcoming-item(v-if="slideView === idx")
        img(v-lazy="imageFullUrl + movie.backdrop_path", alt="alt")
        .main-upcoming-content
            .container
                h1 {{movie.title}}
                p {{movie.overview}}
                BtnMore()
        .main-upcoming-next(@click="$emit('slideNext')")
            img(:src="imageFullUrl + next.backdrop_path", alt="alt")
            .main-upcoming-next-content
                span.next Следующий
                span.title {{next.title}}
            .main-upcoming-next-line
</template>
<script>
import { mapState } from "vuex";
export default {
    props: {
        movie: Object,
        idx: Number,
        slideView: Number,
        next: Object
    },
    computed: {
        ...mapState(['imageFullUrl'])
    },
}
</script>
<style lang="scss">
    
</style>