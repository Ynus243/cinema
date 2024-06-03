<template lang="pug">
header.header
    nav.header-nav
        .container
            router-link(to="/")
                img(src="@/assets/img/Logo.svg", alt="alt")
            button.burger(@click="burger = true") +
            ul.header-nav-list(:class="{active: burger}")
                button.close(@click="burger = false") X
                li(v-for="link in links" :key="link.url" @click="burger = false") 
                    router-link(:to="link.url") {{link.title}}
                li(@click="burger = false")
                    router-link(to="/search") 
                        img(src="@/assets/img/search.svg", alt="alt")
</template>
<script>
export default {
    data() {
        return {
            links: [
                {title: 'Главная', url: '/'},
                {title: 'Фильмы', url: '/films'},
                {title: 'Сериалы', url: '/series'},
            ],
            burger: false
        }
    },
}
</script>
<style lang="scss">
     
</style>