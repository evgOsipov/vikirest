<template>
  <v-app class="flex-column" style="background: #dcc7b5;">
    <PageHeader class="flex-0-0"/>
    <v-main>
      <RouterView/>
    </v-main>
    <PageFooter class="flex-0-0"/>
  </v-app>
</template>

<script lang="ts" setup>
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
</script>

<style lang="css" scoped>

</style>
