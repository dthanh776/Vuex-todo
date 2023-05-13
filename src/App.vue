<template>
    <NavbarC />
    <TodoC />
    <StatusC />
    <ProgressBarC />
</template>
  
  <script>
import TodoC from "./components/TodoC.vue";
import NavbarC from "./components/NavbarC.vue";
import StatusC from "./components/StatusC.vue";
import ProgressBarC from "./components/ProgressBarC.vue";

export default {
    components: {
        TodoC,
        NavbarC,
        StatusC,
        ProgressBarC,
    },
};
</script>
  
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: rgb(219, 219, 219);
    margin: 20px auto;
    width: 90%;
    max-width: 800px;
}
.todo-list ul {
    padding: 0 10px 10px 10px;
    list-style-type: none;
}
.todo-list li {
    padding: 10px;
    cursor: pointer;
    margin: 10px 0;
    border-radius: 4px;
    background: rgb(240, 240, 240);
    color: black;
}
.navbar {
    padding: 5px;
    text-align: center;
    background: rgb(240, 240, 240);
    color: black;
}
.navbar ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
}
.todo-list li.completed {
    background: rgb(121, 204, 96);
}
</style>