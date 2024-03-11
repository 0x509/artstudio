<template>
  <section>
    <Header />
    <section class="w-full">
      <div class="grid grid-cols-12">
        <Sidebar class="col-span-3" />
        <Generations class="col-span-9" />
      </div>
    </section>
  </section>
</template>

<style>
  body {
    height: 100vh;
    @apply bg-gray-800;
  }
</style>

<script setup lang="ts">
</script>