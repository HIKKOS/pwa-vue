<template>
    <header class="bg-teal-400">
        <nav class="flex justify-between w-full bg-purple-500 text-white p-4">
            <a href="#"><span class="font-semibold text-2xl tracking-tight">Mis todos</span></a>
            <div class="md:items-center md:w-auto flex">

                <div class="flex text-sm">
                    <button
                        class="bg-white  align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        type="button">
                        <span class="text-purple-500">Agregar</span>
                    </button>
                </div>
            </div>
        </nav>
    </header>

    <h2 v-if="!hasLoaded">Cargando....</h2>
    <div v-else
        class="p-4  grid md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-1  lg:grid-cols-5 lg:grid-rows-5 gap-5 ">
        <TodoCard v-for="item in todos" :completed="item.completed" :id="item.id" :title="item.title"
            :description="item.description" :key="item.id" />



    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TodoCard from './components/TodoCard.vue';
const hasLoaded = ref(false);
interface Todo {
    id: number;
    title: string;
    description: string | undefined;
    completed: boolean;
}
const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    const data = await response.json();
    return data;
};
const todos = ref<Todo[]>([]);
onMounted(async () => {
    todos.value = (await fetchTodos() as []).map((item: any) => ({
        id: item.id,
        title: item.title,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        , completed: item.completed,
    }));
    hasLoaded.value = true;
});


</script>