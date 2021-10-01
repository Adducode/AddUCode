<template>
    <div class="app" :class="mode">
        <router-view :mode="mode" @toggle="toggle"></router-view>
        <router-view :mode="mode" name="application"></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    data () {
        return {
            mode: 'light'
        }
    },
    created () {
        window.addEventListener('keyup', this.keyPress)
    },
    methods: {
        keyPress(e) {
            if (e.key === 't') {
                this.toggle()
            }
        },
        toggle() {
            if (this.mode === 'dark') {
                this.mode = 'light';
            } else {
                this.mode = 'dark';
            }
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';

.dark {
    *::selection {
        background-color: $gold-color-400 !important;
        color: $black-color-900 !important;
    }

    .header {
        background-color: $gold-color-500 !important;
        background-image: linear-gradient(315deg, $gold-color-500 0%, $black-color-900 74%) !important;

        .add-btn {
            color: $gold-color-400 !important;
        }

        &__close-icon {
            display: none!important;

            &--dark-mode {
                display: block!important;
                margin-top: 5px;
            }
        }

        &__links-wrapper a:nth-child(n+1):hover:before,
        &__links-wrapper a:nth-child(n+1):hover:after {
            background-color: $gold-color-400 !important;
        }

        &__mobile-menu {
            background-color: $black-color-900 !important;
            background-image: linear-gradient(315deg, $black-color-900 30%, $gold-color-400 100%) !important;
        }

        .active {
            background-color: $gold-color-500 !important;
            background-image: linear-gradient(315deg, $gold-color-500 0%, $black-color-900 74%) !important;
            box-shadow: 0 0 15px $black-color-900 !important;
        }
    }

    .footer {
        background-color: $gold-color-500 !important;
        background-image: linear-gradient(315deg, $black-color-900 0%, $gold-color-500 74%) !important;

        .add-btn,
        &__contact-phone,
        &__contact-email,
        &__copyright {
            color: $gold-color-400 !important;
        }

        &__first-column a:hover:before,
        &__first-column a:hover:after,
        &__second-column a:hover:before,
        &__second-column a:hover:after {
            content: url("./assets/icons/star.svg") !important;
        }

        &__contact-email:hover {
            background-image: url("./assets/icons/email-color.svg") !important;
        }

        &__contact-phone:hover {
            background-image: url("./assets/icons/phone-color.svg") !important;
        }
    }

    .home {
        background-color: $gold-color-500 !important;
        background-image: linear-gradient(315deg, $gold-color-500 0%, $black-color-900 15%) !important;

        &__title {
            color: $gold-color-400 !important;
        }

        .home-window-link {
            &__img-wrapper {
                box-shadow: 0 0 35px $white-color-100 !important;
            }

            &__description {
                color: $gold-color-400 !important;
            }

            &__btn {
                color: $gold-color-400 !important;
                background-color: $black-color-800 !important;
                box-shadow: 0 0 80px $gold-color-400 !important;

                &:hover {
                    background-color: $gold-color-400 !important;
                    color: $black-color-900 !important;
                }

                &:before {
                    content: url("./assets/icons/right-arrow.svg") !important;
                }

                &:after {
                    content: url("./assets/icons/left-arrow.svg") !important;
                }
            }
        }
    }

    .contact {
        background-color: $gold-color-500 !important;
        background-image: linear-gradient(315deg, $gold-color-500 0%, $black-color-900 15%) !important;
        color: $gold-color-400 !important;

        &__contact-phone {
            color: $gold-color-400 !important;

            &:hover {
                background-image: url("./assets/icons/phone-color.svg") !important;
            }
        }

        &__contact-email {
            color: $gold-color-400 !important;

            &:hover {
                background-image: url("./assets/icons/email-color.svg") !important;
            }
        }

        &__address {
            color: $gold-color-400 !important;

            &:hover {
                color: $gold-color-400 !important;
            }
        }
    }

    .projects {
        background-color: $gold-color-500 !important;
        background-image: linear-gradient(315deg, $gold-color-500 0%, $black-color-900 15%) !important;
        color: $gold-color-400 !important;

        &__link {
            color: $gold-color-400 !important;

            &:hover {
                color: $gold-color-400 !important;
                box-shadow: -40px 0 60px $gold-color-400 !important;
            }

            &:before {
                color: $gold-color-400 !important;
            }

            &:after {
                content: url("./assets/icons/left-arrow.svg") !important;
            }

            &--not-link {
                &:before, &:after {
                    content: none !important;
                }

                &:hover {
                    box-shadow: none !important;
                }
            }
        }
    }

    .options {
        background-color: $gold-color-500 !important;
        background-image: linear-gradient(315deg, $gold-color-500 0%, $black-color-900 15%) !important;
        color: $gold-color-400 !important;

        .switcher-2 input:before {
            color: $black-color-900 !important;
        }

        .switcher-2 input:after {
            color: $gold-color-400 !important;
        }
    }
}
</style>
