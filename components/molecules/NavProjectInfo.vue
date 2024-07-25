<template>
  <div class="nav-project-info">
    <BaseTitle2 class="white-background font-size-2-0 uppercase bold">
      {{ title }}
    </BaseTitle2>
    <BaseText>
      {{ description }}
    </BaseText>
    <BaseTitle3> Tasks </BaseTitle3>
    <ul>
      <li v-for="task in tasks" :key="task">
        <BaseText>
          {{ task }}
        </BaseText>
      </li>
    </ul>
    <BaseTitle3> Duration </BaseTitle3>
    <BaseText>
      {{ duration }}
    </BaseText>
    <BaseTitle3> Skills Gained </BaseTitle3>
    <ul>
      <li v-for="skill in skillsGained" :key="skill">
        <BaseText>
          {{ skill }}
        </BaseText>
      </li>
    </ul>
    <BaseTitle3> Presented On </BaseTitle3>
    <ul>
      <li v-for="presentation in presentedOn" :key="presentation">
        <BaseText>
          {{ presentation }}
        </BaseText>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  tasks: string[]
  duration: string
  skillsGained: string[]
  presentedOn: string[]
}>()
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 360px;
  width: 100%;
}
</style>
