<template>
  <v-app-bar class="px-5 justify-space-between" color="#722F37">
    <template #default>
      <div class="d-flex justify-space-between align-center w-100">
        <v-img v-if="!display.smAndDown.value" :src="Vlogo" width="70" height="70" class="flex-0-0"></v-img>
        <v-app-bar-nav-icon v-if="display.smAndDown.value" @click="navi = !navi">
        </v-app-bar-nav-icon>
        <v-tabs
          v-else
          class="flex-1-1 justify-center"
          align-tabs="center"
        >
          <v-tab to="/">Главная</v-tab>
          <v-tab to="/menu">Меню</v-tab>
          <v-tab to="/feedback">Отзывы</v-tab>
          <v-tab to="/about">О нас</v-tab>
          <v-tab to="/contacts">Контакты</v-tab>
        </v-tabs>
        <v-btn @click="reserve = true">Зарезервировать</v-btn>
      </div>
    </template>
  </v-app-bar>
  <v-navigation-drawer v-if="display.smAndDown.value" v-model="navi" color="#dcc7b5">
    <template #prepend>
      <div class="d-flex justify-center">
        <v-img :src="Vlogo" width="70" height="70" class="flex-0-0"></v-img>
      </div>

    </template>
    <v-list class="text-center text-h6" nav>
      <v-list-item :style="textStyleRed" to="/">
        Главная
      </v-list-item>
      <v-list-item :style="textStyleRed" to="/menu">
        Меню
      </v-list-item>
      <v-list-item :style="textStyleRed" to="/feedback">
        Отзывы
      </v-list-item>
      <v-list-item :style="textStyleRed" to="/about">
        О нас
      </v-list-item>
      <v-list-item :style="textStyleRed" to="/contacts">
        Контакты
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-dialog v-model="reserve">
    <v-sheet class="mx-auto" color="#dcc7b5">
      <v-toolbar color="#2b070b">
        <v-toolbar-title>
          Оставить заявку на бронирование
        </v-toolbar-title>
      </v-toolbar>
      <v-card width="1000" color="transparent" rounded="0">
        <v-card-item>
          <v-form>
            <v-label>Введите дату</v-label>
            <v-text-field :style="textStyleRed" class="text-h5" base-color="#2b070b" type="date">

            </v-text-field>
            <v-label>Введите время</v-label>
            <v-text-field :style="textStyleRed" class="text-h5" base-color="#2b070b" type="time">

            </v-text-field>
            <v-label>Введите время</v-label>
            <v-text-field :style="textStyleRed" class="text-h5" base-color="#2b070b" type="date">

            </v-text-field>
            <v-text-field :style="textStyleRed" class="text-h5" base-color="#2b070b" type="date">

            </v-text-field>
          </v-form>
        </v-card-item>
      </v-card>

    </v-sheet>
  </v-dialog>
</template>

<script lang="ts" setup>
import Vlogo from '@/assets/img/logo.svg';
import { useDisplay } from 'vuetify';
import { ref } from 'vue';

const navi = ref(false);
const reserve = ref(false);

const display = useDisplay();
const textStyleRed = {
  color: '#2b070b',
};
</script>

<style lang="css" scoped>

</style>