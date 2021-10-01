<template>
    <layout>
        <div class="options">
            <h1 class="options__title">Options</h1>
            <div class="options__theme-wrapper">
                <div class="options__subtitle">Dark mode :</div>
                <p class="options__text">Press ' T ' on your keyboard to turn on/off dark mode or click on the button</p>
                <theme-switcher  class="options__switcher" :mode="mode" @toggle="darkMode"></theme-switcher>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from '@/components/layout/Layout'
import ThemeSwitcher from '@/components/atoms/ThemeSwitcher';

export default {
    name: "Options",
    components: {
        Layout,
        'theme-switcher' : ThemeSwitcher
    },
    props: {
        mode: String,
    },
    methods: {
        darkMode() {
            this.$emit('toggle');
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';

.options {
    display: flex;
    flex-direction: column;
    background-color: $blue-color-400;
    background-image: linear-gradient(315deg, $blue-color-400 0%, $white-color-100 15%);
    padding: 20px 10px;
    color: $blue-color-500;

    @include media-breakpoint-up(sm) {
        padding: 70px 10px;
    }

    @include media-breakpoint-up(md) {
        padding: 120px 10px;
    }

    @include media-breakpoint-up(lg) {
        padding: 175px 10px;
    }

    &__title {
        text-align: center;
        font-size: 40px;
        font-weight: 700;
    }

    &__theme-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    &__subtitle {
        font-size: 24px;
        margin: 40px 0 0;
    }

    &__text {
        @include media-breakpoint-up(sm) {
            width: 320px;
            margin: 0 auto 16px;
        }
    }

    &__switcher {

    }
}

</style>