<template>
    <div class="navbar">
        <h1>VueX</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li v-if="store.state.auth.authenticated">
                Total todos: {{ totalTodos }}
                <button @click="loginOrLogout">Logout</button>
            </li>
            <li v-else><button @click="loginOrLogout">Login</button></li>
        </ul>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore();

        const totalTodos = computed(() => store.state.todos.length);
        const loginOrLogout = () => {
            store.commit("TOGGLE_AUTH");
        };

        return { totalTodos, loginOrLogout, store };
    },
};
</script>

<style>
</style>