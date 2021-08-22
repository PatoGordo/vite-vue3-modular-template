<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Module",
  created() {
    console.log("about module loaded");
  },
});
</script>
