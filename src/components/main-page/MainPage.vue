<template>
  <v-container class="pa-0" fluid>
    <v-row no-gutters>
      <v-col class="pa-0">
        <v-parallax :src="MainImg" height="850" width="100%" scale="1" class="align-end">
          <v-card color="transparent border-none" max-width="500">
            <v-card-title>
              <h1>Ресторан VG</h1>
            </v-card-title>
            <v-card-text>
              Приглашаем вас на захватывающий гастрономический ужин, где изысканные блюда и избранные вина сочетаются в идеальной гармонии, доставляя незабываемые впечатления и удовольствие.
            </v-card-text>
          </v-card>
        </v-parallax>
      </v-col>
    </v-row>
    <v-container max-width="1000" class="d-flex flex-column pt-4 ga-7">
      <v-row class="justify-center" no-gutters>
        <v-col class="text-center">
          <h3 :style="textStyleRed" class="text-h3">О нас</h3>
        </v-col>
      </v-row>
      <v-row class="align-center justify-center" no-gutters>
        <v-col :style="textStyleRed">
          <p class="pb-4">Наше меню предлагает уникальные гастрономические изыски, вдохновленные мировыми кулинарными традициями. Вино нашей тщательно подобранной карты подчеркнет вкус каждого блюда. </p>
          <p class="pb-4">Ощутите искусство в каждом приеме и окунитесь в мир неповторимых вкусов в "VG".</p>
        </v-col>
        <v-col>
          <v-img :src="AuthorPhoto" width="400">
          </v-img>
        </v-col>
      </v-row>
      <v-row class="align-center justify-center" no-gutters>
        <v-col>
          <v-img :src="RestaurantMain" width="400">
          </v-img>
        </v-col>
        <v-col :style="textStyleRed">
          <p class="pb-4">Добро пожаловать в "VG" - ресторан, где встречаются высокая кухня и роскошное вино. Здесь вы откроете для себя уникальное сочетание гастрономических изысков и непревзойденного внимания к каждому гостю.</p>
          <p class="pb-4">Наша команда профессиональных поваров создает блюда, вдохновленные лучшими мировыми кулинарными традициями, чтобы каждый прием стал для вас незабываемым кулинарным путешествием.</p>
          <p class="pb-4">Виктория - основатель гастрономического ресторана "VG" с роскошным вином.</p>
        </v-col>
      </v-row>
    </v-container>
    <v-row no-gutters>
      <v-col class="pa-0">
        <v-parallax :src="FoodImg" height="450" width="100%" scale="1" class="align-center text-center">
          <p class="text-h6">Вы не забудете это никогда</p>
          <v-btn class="text-h6" variant="text" :ripple="false" to="/menu">НАШЕ МЕНЮ</v-btn>
        </v-parallax>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import MainImg from '@/assets/img/main-cover.png';
import FoodImg from '@/assets/img/food-main.png';
import AuthorPhoto from '@/assets/img/author-photo.jpg';
import RestaurantMain from '@/assets/img/rest-main.webp';

const textStyleRed = {
  color: '#2b070b',
};
</script>

<style lang="css">

</style>
