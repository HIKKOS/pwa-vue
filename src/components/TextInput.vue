<template>
  <form>
    <div class="relative">
      <div
        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />

          <g id="Complete">
            <g data-name="add" id="add-2">
              <g>
                <line
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="12"
                  x2="12"
                  y1="19"
                  y2="5"
                />

                <line
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="5"
                  x2="19"
                  y1="12"
                  y2="12"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <input
        @change="
          $emit('update:modelValue', ($event.target as HTMLInputElement)?.value)
        "
        type="search"
        :value="modelValue"
        id="default-search"
        class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 blue-500"
        :placeholder="placeholder"
        required
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  placeholder: string;
  modelValue: string;
}>();
</script>

<style scoped></style>
