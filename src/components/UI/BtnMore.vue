<template lang="pug">
a(href="#").more
    img(src="@/assets/img/bars.svg", alt="alt")
    span Подробнее
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .more{
        color: white;
        font-size: 20px;
        padding: 10px 15px;
        background: #149A03;
        border-radius: 10px;
        font-weight: 400;
        display: flex;
        gap: 15px;
        width: max-content;
    }
</style>