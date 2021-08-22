<template>
  <div>
    <h2>About page</h2>
    <strong>{{ $store.state.count }}</strong>
    <button @click="$store.commit('increment')">Increment Counter</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About page",
});
</script>

<style lang="scss" scoped></style>
