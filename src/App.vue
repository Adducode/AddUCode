<template>
    <div>
        <router-view></router-view>
        <router-view name="application"></router-view>
    </div>
</template>

<script>
export default {
    name: "App"
}
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';
</style>
