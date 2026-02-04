<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section id="education" class="py-20 px-4">
    <div class="max-w-5xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-12"
      >
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          {{ t("education.title") }}
        </h2>
      </div>

      <UCard
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :visible-once="{
          opacity: 1,
          scale: 1,
          transition: { duration: 600, delay: 200 },
        }"
      >
        <div class="flex flex-col md:flex-row gap-6 items-center">
          <div
            class="flex-shrink-0 w-20 h-20 rounded-full bg-indigo-500/10 flex items-center justify-center"
          >
            <UIcon
              name="i-lucide-graduation-cap"
              class="text-4xl text-indigo-500"
            />
          </div>

          <div class="flex-grow text-center md:text-left">
            <h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              {{ t("education.degree") }}
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-2">
              {{ t("education.university") }}
            </p>
            <div
              class="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-gray-600 dark:text-gray-500"
            >
              <div class="flex items-center gap-1">
                <UIcon name="i-lucide-calendar" />
                <span>{{ t("education.period") }}</span>
              </div>
              <div class="flex items-center gap-1">
                <UIcon name="i-lucide-map-pin" />
                <span>{{ t("education.location") }}</span>
              </div>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>
