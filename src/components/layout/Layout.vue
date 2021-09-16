<template>
    <div>
        <main-header></main-header>
        <slot></slot>
        <main-footer></main-footer>
    </div>
</template>

<script>
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'

export default {
    name: "Layout",
    components : {
        'main-header' : Header,
        'main-footer' : Footer
    }
}
</script>

<style scoped>

</style>