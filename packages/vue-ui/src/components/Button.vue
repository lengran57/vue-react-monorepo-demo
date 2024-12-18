<template>
  <button :class="type">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
});
</script>

<style scoped>
button {
  padding: 10px 20px;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 6px;
}
.primary {
  background-color: #409eff;
}
.success {
  background-color: #67c23a;
}
.warning {
  background-color: #e6a23c;
}
.danger {
  background-color: #f56c6c;
}
</style>
