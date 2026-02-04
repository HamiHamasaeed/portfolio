<script setup lang="ts">
const { t } = useI18n();

const experiences = computed(() => [
  {
    id: "codify",
    title: t("experience.jobs.codify.title"),
    company: t("experience.jobs.codify.company"),
    location: t("experience.jobs.codify.location"),
    period: t("experience.jobs.codify.period"),
    description: t("experience.jobs.codify.description"),
    icon: "i-lucide-code",
    color: "blue",
    current: true,
  },
  {
    id: "runaki",
    title: t("experience.jobs.runaki.title"),
    company: t("experience.jobs.runaki.company"),
    location: t("experience.jobs.runaki.location"),
    period: t("experience.jobs.runaki.period"),
    description: t("experience.jobs.runaki.description"),
    icon: "i-lucide-graduation-cap",
    color: "green",
    current: true,
  },
  {
    id: "liya",
    title: t("experience.jobs.liya.title"),
    company: t("experience.jobs.liya.company"),
    location: t("experience.jobs.liya.location"),
    period: t("experience.jobs.liya.period"),
    description: t("experience.jobs.liya.description"),
    icon: "i-lucide-wrench",
    color: "purple",
    current: false,
  },
]);
</script>

<template>
  <section id="experience" class="py-20 px-4">
    <div class="max-w-5xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          {{ t("experience.title") }}
        </h2>
      </div>

      <!-- Timeline -->
      <div class="space-y-8">
        <div
          v-for="(exp, index) in experiences"
          :key="exp.id"
          v-motion
          :initial="{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 600, delay: index * 100 },
          }"
        >
          <UCard>
            <div class="flex flex-col md:flex-row md:items-start gap-4">
              <!-- Icon -->
              <div
                :class="`flex-shrink-0 w-12 h-12 rounded-full bg-${exp.color}-500/10 flex items-center justify-center`"
              >
                <UIcon
                  :name="exp.icon"
                  :class="`text-2xl text-${exp.color}-500`"
                />
              </div>

              <!-- Content -->
              <div class="flex-grow">
                <div
                  class="flex flex-wrap items-start justify-between gap-2 mb-2"
                >
                  <div>
                    <h3
                      class="text-xl font-semibold text-gray-900 dark:text-white"
                    >
                      {{ exp.title }}
                    </h3>
                    <p class="text-base text-gray-600 dark:text-gray-400">
                      {{ exp.company }}
                    </p>
                  </div>
                  <UBadge
                    v-if="exp.current"
                    color="success"
                    variant="soft"
                    size="sm"
                  >
                    {{ t("experience.current") }}
                  </UBadge>
                </div>

                <div
                  class="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-500 mb-3"
                >
                  <div class="flex items-center gap-1">
                    <UIcon name="i-lucide-calendar" class="text-xs" />
                    <span>{{ exp.period }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <UIcon name="i-lucide-map-pin" class="text-xs" />
                    <span>{{ exp.location }}</span>
                  </div>
                </div>

                <p class="text-gray-700 dark:text-gray-300">
                  {{ exp.description }}
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </section>
</template>
