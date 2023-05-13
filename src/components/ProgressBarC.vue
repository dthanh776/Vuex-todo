<template>
    <p class="progress-bar">Progress: {{ progress() }}%</p>
</template>

<script>
import { useStore } from "vuex";
// import { computed } from "vue";

export default {
    setup() {
        const store = useStore();

        const progress = () => store.getters.progress;

        return { progress };
    },
};
</script>

<style>
</style>