<script setup lang="ts">
const { t } = useI18n();

const skills = ref({
  frontend: [
    { name: "Vue.js", icon: "i-lucide-layers", level: 95 },
    { name: "Nuxt.js", icon: "i-lucide-box", level: 90 },
    { name: "React", icon: "i-lucide-atom", level: 85 },
    { name: "JavaScript", icon: "i-lucide-code", level: 95 },
    { name: "TypeScript", icon: "i-lucide-file-code", level: 80 },
    { name: "HTML/CSS", icon: "i-lucide-palette", level: 95 },
    { name: "Tailwind CSS", icon: "i-lucide-paintbrush", level: 90 },
    { name: "Bootstrap", icon: "i-lucide-layout", level: 85 },
  ],
  backend: [
    { name: "Node.js", icon: "i-lucide-server", level: 80 },
    { name: "Express.js", icon: "i-lucide-zap", level: 80 },
    { name: "MongoDB", icon: "i-lucide-database", level: 75 },
    { name: "MySQL", icon: "i-lucide-hard-drive", level: 80 },
    { name: "Java Swing", icon: "i-lucide-coffee", level: 70 },
  ],
  tools: [
    { name: "Git", icon: "i-lucide-git-branch", level: 90 },
    { name: "GitHub", icon: "i-lucide-github", level: 90 },
    { name: "Linux (Ubuntu)", icon: "i-lucide-terminal", level: 80 },
    { name: "Adobe Photoshop", icon: "i-lucide-image", level: 85 },
    { name: "Adobe Illustrator", icon: "i-lucide-pen-tool", level: 80 },
    { name: "Adobe InDesign", icon: "i-lucide-book-open", level: 75 },
    { name: "Agile/Scrum", icon: "i-lucide-kanban", level: 80 },
  ],
  hardware: [
    { name: "Arduino", icon: "i-lucide-cpu", level: 85 },
    { name: "Microcontrollers", icon: "i-lucide-circuit-board", level: 80 },
    { name: "IoT", icon: "i-lucide-wifi", level: 75 },
    { name: "Flutter", icon: "i-lucide-smartphone", level: 70 },
    { name: "Networking", icon: "i-lucide-network", level: 75 },
  ],
});

const categoryColors = {
  frontend: "blue",
  backend: "green",
  tools: "purple",
  hardware: "orange",
};
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
        <UBadge size="lg" color="primary" variant="soft" class="mb-4">
          <UIcon name="i-lucide-sparkles" class="mr-1" />
          {{ t("skills.badge") }}
        </UBadge>
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          {{ t("skills.title") }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ t("skills.description") }}
        </p>
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
          class="border-2 border-blue-500/20 hover:border-blue-500/50 transition-colors"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center"
              >
                <UIcon
                  name="i-lucide-layout-dashboard"
                  class="text-2xl text-blue-500"
                />
              </div>
              <div>
                <h3 class="text-xl font-semibold">
                  {{ t("skills.frontend") }}
                </h3>
                <p class="text-sm text-gray-500">
                  {{ skills.frontend.length }} {{ t("skills.technologies") }}
                </p>
              </div>
            </div>
          </template>
          <div class="space-y-3">
            <div
              v-for="skill in skills.frontend"
              :key="skill.name"
              class="group"
            >
              <div class="flex items-center justify-between mb-1">
                <div class="flex items-center gap-2">
                  <UIcon :name="skill.icon" class="text-blue-500" />
                  <span class="font-medium text-gray-700 dark:text-gray-300">{{
                    skill.name
                  }}</span>
                </div>
                <span class="text-sm text-gray-500">{{ skill.level }}%</span>
              </div>
              <div
                class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
              >
                <div
                  class="h-full bg-linear-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
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
          class="border-2 border-green-500/20 hover:border-green-500/50 transition-colors"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center"
              >
                <UIcon name="i-lucide-server" class="text-2xl text-green-500" />
              </div>
              <div>
                <h3 class="text-xl font-semibold">{{ t("skills.backend") }}</h3>
                <p class="text-sm text-gray-500">
                  {{ skills.backend.length }} {{ t("skills.technologies") }}
                </p>
              </div>
            </div>
          </template>
          <div class="space-y-3">
            <div
              v-for="skill in skills.backend"
              :key="skill.name"
              class="group"
            >
              <div class="flex items-center justify-between mb-1">
                <div class="flex items-center gap-2">
                  <UIcon :name="skill.icon" class="text-green-500" />
                  <span class="font-medium text-gray-700 dark:text-gray-300">{{
                    skill.name
                  }}</span>
                </div>
                <span class="text-sm text-gray-500">{{ skill.level }}%</span>
              </div>
              <div
                class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
              >
                <div
                  class="h-full bg-linear-to-r from-green-400 to-green-600 rounded-full transition-all duration-500"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
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
          class="border-2 border-purple-500/20 hover:border-purple-500/50 transition-colors"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center"
              >
                <UIcon
                  name="i-lucide-wrench"
                  class="text-2xl text-purple-500"
                />
              </div>
              <div>
                <h3 class="text-xl font-semibold">{{ t("skills.tools") }}</h3>
                <p class="text-sm text-gray-500">
                  {{ skills.tools.length }} {{ t("skills.technologies") }}
                </p>
              </div>
            </div>
          </template>
          <div class="space-y-3">
            <div v-for="skill in skills.tools" :key="skill.name" class="group">
              <div class="flex items-center justify-between mb-1">
                <div class="flex items-center gap-2">
                  <UIcon :name="skill.icon" class="text-purple-500" />
                  <span class="font-medium text-gray-700 dark:text-gray-300">{{
                    skill.name
                  }}</span>
                </div>
                <span class="text-sm text-gray-500">{{ skill.level }}%</span>
              </div>
              <div
                class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
              >
                <div
                  class="h-full bg-linear-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
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
          class="border-2 border-orange-500/20 hover:border-orange-500/50 transition-colors"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center"
              >
                <UIcon name="i-lucide-cpu" class="text-2xl text-orange-500" />
              </div>
              <div>
                <h3 class="text-xl font-semibold">
                  {{ t("skills.hardware") }}
                </h3>
                <p class="text-sm text-gray-500">
                  {{ skills.hardware.length }} {{ t("skills.technologies") }}
                </p>
              </div>
            </div>
          </template>
          <div class="space-y-3">
            <div
              v-for="skill in skills.hardware"
              :key="skill.name"
              class="group"
            >
              <div class="flex items-center justify-between mb-1">
                <div class="flex items-center gap-2">
                  <UIcon :name="skill.icon" class="text-orange-500" />
                  <span class="font-medium text-gray-700 dark:text-gray-300">{{
                    skill.name
                  }}</span>
                </div>
                <span class="text-sm text-gray-500">{{ skill.level }}%</span>
              </div>
              <div
                class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
              >
                <div
                  class="h-full bg-linear-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-500"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>
