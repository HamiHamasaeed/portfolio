<script setup lang="ts">
defineProps<{
  class?: string;
}>();
</script>

<template>
  <div :class="$props.class" class="aurora-background">
    <div class="aurora-gradient"></div>
    <div class="aurora-gradient aurora-gradient-2"></div>
    <div class="aurora-gradient aurora-gradient-3"></div>
  </div>
</template>

<style scoped>
.aurora-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #dbeafe 100%);
}

.dark .aurora-background {
  background: linear-gradient(135deg, #0f172a 0%, #020617 100%);
}

.aurora-gradient {
  position: absolute;
  width: 50vw;
  height: 50vh;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.2;
  animation: aurora 15s ease-in-out infinite;
}

.dark .aurora-gradient {
  opacity: 0.3;
}

.aurora-gradient:nth-child(1) {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  top: -20%;
  left: -10%;
  animation-delay: 0s;
}

.aurora-gradient-2 {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  top: 50%;
  right: -10%;
  animation-delay: 5s;
}

.aurora-gradient-3 {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  bottom: -20%;
  left: 30%;
  animation-delay: 10s;
}

@keyframes aurora {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 30px) scale(0.9);
  }
}
</style>
