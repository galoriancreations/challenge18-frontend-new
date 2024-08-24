<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  subtitle: String,
  showHeading: { type: Boolean, default: true },
  dense: { type: Boolean, default: false }
});

const title = computed(() => props.title);
const classes = computed(() => ["page", { "page--dense": props.dense }]);

useHead({ title });

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style lang="scss">
.page {
}
</style>
