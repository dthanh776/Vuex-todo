<template>
    <div class="todo-list">
        <TodoForm />
        <ul v-if="isAutheticated">
            <li
                v-for="todo in todos"
                :key="todo.id"
                :class="todo.completed ? 'completed' : ''"
            >
                {{ todo.title }}
                <input
                    type="checkbox"
                    :checked="todo.completed"
                    @change="markTodoCompleted(todo.id)"
                />

                <button @click="deleteTodo(todo.id)">Delete</button>
            </li>
        </ul>
        <p v-else style="text-align: center">Not logged in</p>
    </div>
</template>

<script>
import TodoForm from "./TodoForm.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
    components: {
        TodoForm,
    },
    setup() {
        const store = useStore();

        const todos = computed(() => store.state.todos);

        const isAutheticated = computed(() => store.state.auth.authenticated);

        const markTodoCompleted = (todoID) => {
            store.commit("MARK_COMPLETE", todoID);
        };

        const deleteTodo = (todoID) => {
            store.dispatch("deleteTodo", todoID);
        };

        onMounted(() => {
            store.dispatch("getTodo");
        });

        return {
            todos,
            isAutheticated,
            markTodoCompleted,
            deleteTodo,
        };
    },
};
</script>

<style>
</style>