<template>
 <v-container :max-width="display.lgAndUp.value ? '' : 700" class="fill-height mx-auto" fluid>
   <v-row class="align-center justify-space-around flex-lg-row flex-column" no-gutters>
     <v-col cols="4">
       <v-img :src="AboutStreet" :height="display.lgAndUp.value ? 800 : 400" width="400">
       </v-img>
     </v-col>
     <v-col cols="4" style="color: #2b070b" class="text-wrap text-lg-h5 text-body-1">
       Добро пожаловать в "VG" - ресторан, где встречаются высокая кухня и роскошное вино.<br/><br/> Наше меню предлагает уникальные гастрономические изыски, вдохновленные мировыми кулинарными традициями. Вино нашей тщательно подобранной карты подчеркнет вкус каждого блюда. <br/><br/> Ощутите искусство в каждом приеме и окунитесь в мир неповторимых вкусов в "VG".
     </v-col>
     <v-col cols="4">
       <v-img :src="AboutWork" :height="display.lgAndUp.value ? 800 : 400" width="400">
       </v-img>
     </v-col>
   </v-row>
 </v-container>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';

import AboutStreet from '@/assets/img/о_нас.jpg'
import AboutWork from '@/assets/img/работ.jpg'

const display = useDisplay();
</script>

<style lang="css" scoped>

</style>
