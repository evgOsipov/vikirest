<template>
  <v-container class="pa-0" fluid>
    <v-row no-gutters>
      <v-col class="pa-0">
        <v-parallax :src="ContactsImg" height="450" width="100%" scale="1" class="align-end">
        </v-parallax>
      </v-col>
    </v-row>
    <v-container max-width="1000" class="d-flex flex-column pt-4 ga-7">
      <v-row class="justify-center" no-gutters>
        <v-col class="text-center">
          <h3 :style="textStyleRed" class="text-h4">Контакты</h3>
        </v-col>
      </v-row>
      <v-row class="align-center justify-center" no-gutters>
        <v-col :style="textStyleRed" class="text-center">
          <p class="mb-2 text-body-1">Москва, улица Свободы, дом 40</p>
          <p class="mb-2 text-body-1">+7 499 456 7890</p>
          <p class="mb-2 text-body-1">Электронная почта: vg@restaurant.com</p>
          <p class="mb-2 text-body-1">СМИ: pr@vg.com</p>
        </v-col>
      </v-row>
    </v-container>
    <v-row no-gutters>
      <v-col class="pa-0">
        <div id="map" style="width: 100%; height: 400px"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

import ContactsImg from '@/assets/img/высота.jpg';
import { useMap } from '@/stores/useMap.ts';

const { initMap } = useMap();

const textStyleRed = {
  color: '#2b070b',
};

onMounted(() => {
  ymaps.ready(async () => {
    await initMap();
  });
})
</script>

<style lang="css" scoped>

</style>
