<template>
    <component
        :is="type"
        :to="to"
        class="add-btn"
        :class="[{
            'add-btn--link': to,
            'add-btn--blue': blueBtn,
        }]"
    >{{ title }}
    </component>
</template>

<script>
export default {
    name: "Button",
    props: {
        to: {
            type: String,
            required: false,
        },
        title: {
            type: String
        },
        blueBtn: {
            type: Boolean
        }
    },
    computed: {
        type() {
            if (this.to) {
                return 'router-link';
            }
            return 'v-btn';
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';

.add-btn {
    cursor: pointer;
    transition: opacity 0.3s;
    color: $black-color-900;

    &:hover {
        opacity: 0.5;
    }

    &--link {
        text-decoration: none;
    }

    &--blue {
        color: $blue-color-500;

        &:hover {
            color: $blue-color-500;
        }
    }
}

</style>