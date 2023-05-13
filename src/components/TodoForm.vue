<template>
    <form action="" @submit.prevent="onSubmit">
        <input type="text" v-model="title" />
        <input type="submit" value="Add" />
    </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
    setup() {
        const title = ref("");
        const store = useStore();

        const onSubmit = () => {
            store.dispatch("addTodo", {
                title,
                completed: false,
            });
        };

        return { title, onSubmit };
    },
};
</script>

<style>
</style>