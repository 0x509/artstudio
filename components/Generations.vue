<template>
    <div class="flex flex-wrap gap-4">
      <div v-for="imgData in images">
        <img class="w-full rounded-lg shadow-lg shadow-cyan-800/20 m-2 aspect-square max-h-[384px]" alt="" :src="imgData">
      </div>
    </div>
</template>

<script setup lang="ts">
  const images = useState("images")
</script>