<template>
  <nav class="nav">
    <BaseLink :link="'/'">
      <BaseTitle2 class="white-background font-size-2-0 uppercase bold">
        Paco Pronk
      </BaseTitle2>
    </BaseLink>
    <BaseLink :link="'https://www.linkedin.com/in/paco-pronk'" target="_blank">
      <BaseTitle2 class="white-background uppercase"> LinkedIn </BaseTitle2>
    </BaseLink>
    <BaseLink :link="'/resume.pdf'" target="_blank">
      <BaseTitle2 class="white-background uppercase"> Resume </BaseTitle2>
    </BaseLink>
    <NavProjectInfo
      :title="projectData.title"
      :description="projectData.description"
      :tasks="projectData.tasks"
      :duration="projectData.duration"
      :skillsGained="projectData.skillsGained"
      :presentedOn="projectData.presentedOn"
    />
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { ProjectInfo } from "@/types/types"

const projectData = ref<ProjectInfo>({
  title: "",
  description: "",
  tasks: [],
  duration: "",
  skillsGained: [],
  presentedOn: []
})

// const { data } = await useAsyncData<ProjectInfo>("project", async () => {
//   const content = await queryContent("/").findOne()
//   return {
//     title: content.title || "",
//     description: content.description || "",
//     tasks: content.tasks || [],
//     duration: content.duration || "",
//     skillsGained: content.skillsGained || [],
//     presentedOn: content.presentedOn || []
//   }
// })

// projectData.value = data.value!
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 360px;
  width: 100%;
}

.white-background {
  background-color: white;
}

.font-size-2-0 {
  font-size: 2rem;
}

.uppercase {
  text-transform: uppercase;
}

.bold {
  font-weight: bold;
}
</style>
