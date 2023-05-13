import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
    state: {
        todos: [],
        auth: {
            authenticated: true
        }
    },
    getters: {
        doneTodos: (state) => state.todos.filter((todo) => todo.completed),

        progress: (state, getters) => {
            const doneTodos = getters.doneTodos;
            return Math.round(
                (doneTodos.length / store.state.todos.length) * 100
            );
        }
    },
    mutations: {
        TOGGLE_AUTH(state) {
            state.auth.authenticated = !state.auth.authenticated;
        },
        MARK_COMPLETE(state, todoID) {
            state.todos.map((todo) => {
                if (todo.id === todoID) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        },
        DELETE_TODO(state, todoID) {
            state.todos = state.todos.filter((todo) => todo.id !== todoID);
        },
        ADD_TODO(state, newTodo) {
            state.todos.unshift(newTodo);
        },
        GET_TODO(state, getTodo) {
            state.todos = getTodo;
        }
    },
    actions: {
        async deleteTodo({ commit }, todoID) {
            try {
                await axios.delete(
                    "https://jsonplaceholder.typicode.com/todos/" + todoID
                );
                commit("DELETE_TODO", todoID);
            } catch (error) {
                console.log(error);
            }
        },

        async addTodo({ commit }, newTodo) {
            try {
                await axios.post(
                    "https://jsonplaceholder.typicode.com/todos/",
                    {
                        newTodo
                    }
                );
                commit("ADD_TODO", newTodo);
            } catch (error) {
                console.log(error);
            }
        },

        async getTodo({ commit }) {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/todos?_limit=5"
                );
                commit("GET_TODO", response.data);
            } catch (error) {
                console.log(error);
            }
        }
    }
});

export default store;
