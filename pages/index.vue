<template>
  <div>
    <p>{{ greeting }}</p>
    <div>hello</div>
  </div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp();

const data = await $client.hello.query({ name: "joy dev" });

const greeting = computed(() => data?.greeting);
</script>
