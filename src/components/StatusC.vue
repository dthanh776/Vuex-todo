<template>
    <div class="status-bar" v-if="store.state.auth.authenticated">
        <p>Done</p>
        <ul v-for="todo in todoCompleted" :key="todo.id">
            <li>{{ todo.title }}</li>
        </ul>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
    setup() {
        const store = useStore();

        const todoCompleted = computed(() => store.getters.doneTodos);

        return { todoCompleted, store };
    },
};
</script>

<style>
</style>