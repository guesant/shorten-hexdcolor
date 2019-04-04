<template>
  <div>
    <h2>{{ title }}</h2>
    <div v-if="useSlot">
      <slot />
    </div>
    <div v-else>
      <input type="text">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    useSlot: Boolean,
  },
};
</script>
