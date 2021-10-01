<template>
    <span class="switcher switcher-2">
        <input type="checkbox" id="switcher-2"
              :checked="(mode === 'dark') ?  'checked' : false"
              @change="$emit('toggle')">
        <label for="switcher-2"></label>
    </span>
</template>

<script>
export default {
    name: "ThemeSwitcher",
    props: {
        mode: String,
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';

span.switcher {
    position: relative;
    width:200px;
    height:50px;
    border-radius:25px;
    display: flex;
    margin: 20px auto;

    input {
        appearance: none;
        position: relative;
        width:200px;
        height:50px;
        border-radius:25px;
        outline:none;
        cursor: pointer;
        font-family: 'Oswald', sans-serif;

        &:before, &:after {
            z-index:2;
            position: absolute;
            top:50%;
            transform:translateY(-50%);
        }

        &:before {
            content: 'ON';
            left:20px;
            color: $gold-color-400;
        }

        &:after {
            content: 'OFF';
            right:20px;
            color: $white-color-100;
        }
    }

    label {
        z-index:1;
        position: absolute;
        top:10px;
        bottom:10px;
        border-radius:20px;
    }
    &.switcher-2 {
        overflow:hidden;
        transition: opacity 0.3s ease-in-out;

        &:hover {
            opacity: 0.7;
        }

        input {
            transition:background-color 0s .5s;

            &:before {
                color:$blue-color-400;
            }

            &:after {
                color: $white-color-100;
            }

            &:checked {
                background-color:$gold-color-400;

                &+label {
                    background:$gold-color-400;
                    animation: turn-on .5s ease-out;

                    @keyframes turn-on {
                        0% {
                            left:100%;
                        }
                        100% {
                            left:0%;
                        }
                    }
                }
            }
            &:not(:checked) {
                background:$blue-color-400;

                &+label {
                    background:$blue-color-400;
                    animation: turn-off .5s ease-out;

                    @keyframes turn-off {
                        0% {
                            right:100%;
                        }
                        100% {
                            right:0%;
                        }
                    }
                }
            }
        }

        label {
            top: 0;
            right: 0;
            width:200px;
            height:50px;
            border-radius:25px;
            cursor: pointer;
        }
    }
}

</style>