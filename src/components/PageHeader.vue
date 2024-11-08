<template>
    <v-app-bar class="justify-space-between" color="#722F37">
        <v-img :src="Vlogo" width="70" height="70" class="flex-0-0"></v-img>
        <v-app-nav-icon></v-app-nav-icon>        
        <v-tabs 
          class="flex-1-1 justify-center"
          align-tabs="center"
        >
            <v-tab to="/">Главная</v-tab>
            <v-tab to="/menu">Меню</v-tab>
            <v-tab to="/feedback">Отзывы</v-tab>
            <v-tab to="/about">О нас</v-tab>
            <v-tab to="/contacts">Контакты</v-tab>
        </v-tabs>
        <v-btn>Зарезервировать</v-btn>
    </v-app-bar>
</template>

<script lang="ts" setup>
import Vlogo from '@/assets/img/logo.svg';
</script>

<style lang="" >
    
</style>