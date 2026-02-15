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
    icon: "i-lucide-rocket",
    color: "blue",
    current: true,
    highlight: true,
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
    highlight: false,
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
    highlight: false,
  },
  {
    id: "ruga",
    title: t("experience.jobs.ruga.title"),
    company: t("experience.jobs.ruga.company"),
    location: t("experience.jobs.ruga.location"),
    period: t("experience.jobs.ruga.period"),
    description: t("experience.jobs.ruga.description"),
    icon: "i-lucide-book-open",
    color: "cyan",
    current: false,
    highlight: false,
  },
  {
    id: "smarthealth",
    title: t("experience.jobs.smarthealth.title"),
    company: t("experience.jobs.smarthealth.company"),
    location: t("experience.jobs.smarthealth.location"),
    period: t("experience.jobs.smarthealth.period"),
    description: t("experience.jobs.smarthealth.description"),
    icon: "i-lucide-hospital",
    color: "red",
    current: false,
    highlight: false,
  },
  {
    id: "studentcastle",
    title: t("experience.jobs.studentcastle.title"),
    company: t("experience.jobs.studentcastle.company"),
    location: t("experience.jobs.studentcastle.location"),
    period: t("experience.jobs.studentcastle.period"),
    description: t("experience.jobs.studentcastle.description"),
    icon: "i-lucide-palette",
    color: "pink",
    current: false,
    highlight: false,
  },
  {
    id: "mukryan",
    title: t("experience.jobs.mukryan.title"),
    company: t("experience.jobs.mukryan.company"),
    location: t("experience.jobs.mukryan.location"),
    period: t("experience.jobs.mukryan.period"),
    description: t("experience.jobs.mukryan.description"),
    icon: "i-lucide-users",
    color: "indigo",
    current: false,
    highlight: false,
  },
  {
    id: "mobileshop",
    title: t("experience.jobs.mobileshop.title"),
    company: t("experience.jobs.mobileshop.company"),
    location: t("experience.jobs.mobileshop.location"),
    period: t("experience.jobs.mobileshop.period"),
    description: t("experience.jobs.mobileshop.description"),
    icon: "i-lucide-smartphone",
    color: "amber",
    current: false,
    highlight: false,
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
        <UBadge size="lg" color="primary" variant="soft" class="mb-4">
          <UIcon name="i-lucide-briefcase" class="mr-1" />
          {{ t("experience.badge") }}
        </UBadge>
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          {{ t("experience.title") }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ t("experience.description") }}
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline line -->
        <div
          class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2"
        ></div>

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
            :class="[
              'relative pl-12 md:pl-0',
              index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]',
            ]"
          >
            <!-- Timeline dot -->
            <div
              :class="[
                'absolute left-0 md:left-1/2 w-8 h-8 rounded-full border-4 transform md:-translate-x-1/2 flex items-center justify-center z-10',
                exp.highlight
                  ? 'bg-blue-500 border-blue-300 dark:border-blue-700'
                  : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600',
              ]"
            >
              <UIcon
                :name="exp.icon"
                :class="[
                  'text-sm',
                  exp.highlight
                    ? 'text-white'
                    : 'text-gray-600 dark:text-gray-400',
                ]"
              />
            </div>

            <UCard
              :class="[
                'transition-all duration-300 hover:shadow-lg',
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8',
                exp.highlight
                  ? 'border-2 border-blue-500/30 bg-blue-50/50 dark:bg-blue-900/10'
                  : '',
              ]"
            >
              <div class="flex flex-col gap-3">
                <!-- Header -->
                <div class="flex flex-wrap items-start justify-between gap-2">
                  <div
                    :class="
                      index % 2 === 0
                        ? 'md:text-right md:order-2 md:ml-auto'
                        : ''
                    "
                  >
                    <div
                      class="flex items-center gap-2 flex-wrap"
                      :class="index % 2 === 0 ? 'md:justify-end' : ''"
                    >
                      <h3
                        class="text-xl font-semibold text-gray-900 dark:text-white"
                      >
                        {{ exp.title }}
                      </h3>
                      <UBadge
                        v-if="exp.current"
                        color="success"
                        variant="soft"
                        size="sm"
                      >
                        {{ t("experience.current") }}
                      </UBadge>
                      <UBadge
                        v-if="exp.highlight"
                        color="primary"
                        variant="solid"
                        size="sm"
                      >
                        {{ t("experience.cofounder") }}
                      </UBadge>
                    </div>
                    <p
                      class="text-base font-medium text-gray-600 dark:text-gray-400"
                    >
                      {{ exp.company }}
                    </p>
                  </div>
                </div>

                <!-- Meta info -->
                <div
                  class="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-500"
                  :class="index % 2 === 0 ? 'md:justify-end' : ''"
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

                <!-- Description -->
                <p
                  class="text-gray-700 dark:text-gray-300"
                  :class="index % 2 === 0 ? 'md:text-right' : ''"
                >
                  {{ exp.description }}
                </p>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
