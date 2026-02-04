<script setup lang="ts">
const { t } = useI18n();

const skills = ref({
  frontend: [
    { name: "Vue.js", icon: "i-lucide-layers" },
    { name: "Nuxt.js", icon: "i-lucide-box" },
    { name: "React", icon: "i-lucide-atom" },
    { name: "JavaScript", icon: "i-lucide-code" },
    { name: "TypeScript", icon: "i-lucide-file-code" },
    { name: "HTML/CSS", icon: "i-lucide-palette" },
    { name: "Tailwind CSS", icon: "i-lucide-paintbrush" },
    { name: "Bootstrap", icon: "i-lucide-layout" },
  ],
  backend: [
    { name: "Node.js", icon: "i-lucide-server" },
    { name: "Express.js", icon: "i-lucide-zap" },
    { name: "MongoDB", icon: "i-lucide-database" },
    { name: "MySQL", icon: "i-lucide-hard-drive" },
  ],
  tools: [
    { name: "Git", icon: "i-lucide-git-branch" },
    { name: "GitHub", icon: "i-lucide-github" },
    { name: "Linux (Ubuntu)", icon: "i-lucide-terminal" },
    { name: "Adobe Suite", icon: "i-lucide-image" },
    { name: "Figma", icon: "i-lucide-figma" },
  ],
  hardware: [
    { name: "Arduino", icon: "i-lucide-cpu" },
    { name: "IoT", icon: "i-lucide-wifi" },
    { name: "Flutter", icon: "i-lucide-smartphone" },
    { name: "Microcontrollers", icon: "i-lucide-circuit-board" },
  ],
});
</script>

<template>
  <section id="skills" class="py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          {{ t("skills.title") }}
        </h2>
      </div>

      <!-- Skills Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Frontend -->
        <UCard
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 600, delay: 100 },
          }"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon
                name="i-lucide-layout-dashboard"
                class="text-2xl text-blue-500"
              />
              <h3 class="text-xl font-semibold">{{ t("skills.frontend") }}</h3>
            </div>
          </template>
          <div class="flex flex-wrap gap-3">
            <UBadge
              v-for="skill in skills.frontend"
              :key="skill.name"
              size="lg"
              color="primary"
              variant="soft"
            >
              <UIcon :name="skill.icon" class="mr-1" />
              {{ skill.name }}
            </UBadge>
          </div>
        </UCard>

        <!-- Backend -->
        <UCard
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 600, delay: 200 },
          }"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-server" class="text-2xl text-green-500" />
              <h3 class="text-xl font-semibold">{{ t("skills.backend") }}</h3>
            </div>
          </template>
          <div class="flex flex-wrap gap-3">
            <UBadge
              v-for="skill in skills.backend"
              :key="skill.name"
              size="lg"
              color="success"
              variant="soft"
            >
              <UIcon :name="skill.icon" class="mr-1" />
              {{ skill.name }}
            </UBadge>
          </div>
        </UCard>

        <!-- Tools -->
        <UCard
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 600, delay: 300 },
          }"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-wrench" class="text-2xl text-purple-500" />
              <h3 class="text-xl font-semibold">{{ t("skills.tools") }}</h3>
            </div>
          </template>
          <div class="flex flex-wrap gap-3">
            <UBadge
              v-for="skill in skills.tools"
              :key="skill.name"
              size="lg"
              color="secondary"
              variant="soft"
            >
              <UIcon :name="skill.icon" class="mr-1" />
              {{ skill.name }}
            </UBadge>
          </div>
        </UCard>

        <!-- Hardware -->
        <UCard
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 600, delay: 400 },
          }"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-cpu" class="text-2xl text-orange-500" />
              <h3 class="text-xl font-semibold">{{ t("skills.hardware") }}</h3>
            </div>
          </template>
          <div class="flex flex-wrap gap-3">
            <UBadge
              v-for="skill in skills.hardware"
              :key="skill.name"
              size="lg"
              color="warning"
              variant="soft"
            >
              <UIcon :name="skill.icon" class="mr-1" />
              {{ skill.name }}
            </UBadge>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>
