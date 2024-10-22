<template>
  <MyModal
    title="Agregar Todo"
    @close="showCreateModal = false"
    @submit="submitNewTodo"
    v-show="showCreateModal"
  >
    <template #content>
      <label for="title">Titulo</label>
      <TextInput v-model="newTodo.title" placeholder="Titulo" />
      <label for="description">descripcion</label>
      <TexAreatInput v-model="newTodo.description" placeholder="Descripcion" />
    </template>
  </MyModal>
  <MyModal
    title="Editar Todo"
    @close="showEditModal = false"
    @submit="submitEditedTodo"
    v-show="showEditModal"
  >
    <template #content>
      <label for="title">Titulo</label>
      <TextInput v-model="selectedTodo!.title" placeholder="Titulo" />
      <label for="description">descripcion</label>
      <TexAreatInput
        v-model="selectedTodo!.description"
        placeholder="Descripcion"
      />
    </template>
  </MyModal>
  <header class="bg-teal-400">
    <nav class="flex justify-between w-full bg-purple-500 text-white p-4">
      <a href="#"
        ><span class="font-semibold text-2xl tracking-tight">Mis todos</span></a
      >
      <div class="md:items-center md:w-auto flex">
        <div class="flex text-sm">
          <button
            class="bg-white align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            type="button"
            @click="showCreateModal = true"
          >
            <span class="text-purple-500">Agregar</span>
          </button>
        </div>
      </div>
    </nav>
  </header>
  <main class="w-full min-h-screen flex flex-row bg-slate-200">
    <h2 v-if="!hasLoaded" class="mt-4">Cargando....</h2>
    <h2
      class="m-auto font-bold text-2xl font-mono"
      v-else-if="hasLoaded && todos.length === 0"
    >
      No hay Todos para mostrar
    </h2>
    <div
      v-else
      class="w-full p-4 grid md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-1 lg:grid-cols-5 lg:grid-rows-5 gap-5"
    >
      <TodoCard
        v-for="item in todos"
        :completed="item.completed"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :key="item.id"
        @delete="deleteTodo"
        @edit="editTodo"
        :can-submit="true"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import MyModal from "./components/MyModal.vue";
import TextInput from "./components/TextInput.vue";
import TexAreatInput from "./components/TextAreaInput.vue";
import TodoCard from "./components/TodoCard.vue";
import axiosInstance from "./config/axios";
const hasLoaded = ref(false);
const showCreateModal = ref(false);
const showEditModal = ref(false);

const newTodo = ref({
  id: 0,
  title: "",
  description: "",
  completed: false,
});
const selectedTodo = ref<Todo>({
  id: -1,
  title: "",
  description: "",
  completed: false,
});

const editTodo = async (id: number) => {
  console.log({ idfunc: id });
  const todo = todos.value.find((item) => item.id === id);
  if (!todo) return;
  selectedTodo.value = { ...todo };
  console.log({ selectedTodo: selectedTodo.value });
  showEditModal.value = true;
};

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const submitEditedTodo = () => {
  showEditModal.value = false;
  putTodo().then(() => {
    selectedTodo.value = {
      id: 0,
      title: "",
      description: "",
      completed: false,
    };
  });
};
const submitNewTodo = () => {
  showCreateModal.value = false;
  postTodo().then(() => {
    newTodo.value = {
      id: 0,
      title: "",
      description: "",
      completed: false,
    };
  });
};

const fetchTodos = async () => {
  const { data } = await axiosInstance.get("/todos");

  console.log({ data });
  return data;
};
const postTodo = async () => {
  const { id: _, ...rest } = newTodo.value;
  const response = await axiosInstance.post("/todos", {
    ...rest,
  });
  const data = response.data;
  const todoResponse: Todo = {
    id: data.id,
    title: data.title,
    description: data.description,
    completed: data.done,
  };
  try {
    todos.value = [...todos.value, todoResponse];
  } catch (error) {
    console.error(error);
  }
};
const putTodo = async () => {
  const response = await axiosInstance.put(
    `/todos/${selectedTodo.value.id}`,
    selectedTodo.value
  );
  const data = response.data;
  console.log({ data });
  if (response.status === 200) {
    todos.value = todos.value.map((item) =>
      item.id === selectedTodo.value.id ? selectedTodo.value : item
    );
  }
};
const deleteTodo = async (id: number) => {
  const response = await axiosInstance.delete(`/todos/${id}`);
  console.log(response);
  if (response.status === 200) {
    todos.value = todos.value.filter((item) => item.id !== id);
  }
};

const todos = ref<Todo[]>([]);
onMounted(async () => {
  const data = await fetchTodos();
  todos.value = data.todos;
  hasLoaded.value = true;
});
</script>
