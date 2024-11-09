<template>
  <v-container class="text-center" max-width="1000" fluid>
    <h3 :style="textStyleRed" class="text-h3 mt-2 mb-6">Меню ресторана</h3>
    <v-carousel v-model="currentDish" color="#2b070b" hide-delimiter-background>
      <v-carousel-item v-for="dish in dishes" :key="dish.id" :src="dish.img" cover>
      </v-carousel-item>
    </v-carousel>
    <v-card color="transparent">
      <v-card-title :style="textStyleRed" class="text-h4">
        {{ currentTitle }}
      </v-card-title>
      <v-card-subtitle :style="textStyleRed" class="text-wrap text-h6">
        {{ currentSubtitle }}
      </v-card-subtitle>
      <v-card-text :style="textStyleRed" class="text-h4">
        {{ currentPrice }}
      </v-card-text>
    </v-card>
    <h3 :style="textStyleRed" class="text-h3 mt-16 mb-6">Винная карта</h3>
    <v-carousel height="min-content" color="#2b070b" hide-delimiters>
      <v-carousel-item v-for="vine in vines" :key="vine.id">
        <v-card color="transparent" variant="plain">
          <v-card-title :style="textStyleRed" class="text-h4">
            {{ vine.title }}
          </v-card-title>
          <v-card-subtitle :style="textStyleRed" class="text-wrap text-h6">
            {{ vine.subtitle }}
          </v-card-subtitle>
          <v-card-text :style="textStyleRed" class="text-h4">
            {{ vine.price }}
          </v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script lang="ts" setup>
import FuaGra from '@/assets/img/фуа-гра.jpeg';
import Tartar from '@/assets/img/тартар.jpg';
import Сarpaccio from '@/assets/img/карпаччо.jpg';
import Shrimps from '@/assets/img/креветки.jpg';
import Medallions from '@/assets/img/медальоны.jpg';
import Omar from '@/assets/img/омар.jpg';
import Duck from '@/assets/img/утка.jpeg';
import Salmon from '@/assets/img/сёмга.webp';
import { computed, ref, watch } from 'vue';

const currentDish = ref();
const currentTitle = computed(() => {
  if (currentDish.value === undefined) {
    return '';
  }
  return dishes[currentDish.value].title;
});
const currentSubtitle = computed(() => {
  if (currentDish.value === undefined) {
    return '';
  }
  return dishes[currentDish.value].subtitle;
});
const currentPrice = computed(() => {
  if (currentDish.value === undefined) {
    return '';
  }
  return dishes[currentDish.value].price;
});

const dishes = [
  {
    id: 1,
    title: 'Фуа-гра',
    subtitle: 'на гренки с вишневым соусом и карамелизированным луком',
    img: FuaGra,
    price: 1500,
  },
  {
    id: 2,
    title: 'Тартар',
    subtitle: 'из тунца с авокадо, манго и сладкой ваты',
    img: Tartar,
    price: 1000,
  },
  {
    id: 3,
    title: 'Карпаччо',
    subtitle: 'из говядины с пармезаном, рукколой и трюфелным соусом',
    img: Сarpaccio,
    price: 1500,
  },
  {
    id: 4,
    title: 'Креветки',
    subtitle: 'в кокосовой панировке с манго-чили соусом',
    img: Shrimps,
    price: 1000,
  },
  {
    id: 5,
    title: 'Медальоны филе',
    subtitle: 'маринованной свинины со сливочным соусом, подается с картофельным пюре',
    img: Medallions,
    price: 2000,
  },
  {
    id: 6,
    title: 'Мясо омара',
    subtitle: 'со спагетти "Al Aragosta" в томатном соусе',
    img: Omar,
    price: 3000,
  },
  {
    id: 7,
    title: 'Утиная грудка',
    subtitle: 'с пюре из батата, зеленью и ягодным соусом',
    img: Duck,
    price: 2000,
  },
  {
    id: 8,
    title: 'Стейк из сёмги',
    subtitle: 'с сосуом тар-тар, зеленью и лимоном',
    img: Salmon,
    price: 2500,
  },
];

const vines = [
  {
    id: 1,
    title: 'Шампанское',
    subtitle: '"Dom Pérignon Vintage" 2010 года',
    // img: Salmon,
    price: 5500,
  },
  {
    id: 2,
    title: 'Бургундское вино',
    subtitle: '"Domaine de la Romanée-Conti Romanée-Conti" 2015 года',
    // img: Salmon,
    price: 5000,
  },
  {
    id: 3,
    title: 'Бордоское вино',
    subtitle: '"Château Margaux" 2016 года',
    // img: Salmon,
    price: 4500,
  },
  {
    id: 4,
    title: 'Тосканское вино',
    subtitle: '"Sassicaia" 2017 года',
    // img: Salmon,
    price: 4000,
  },
];

const textStyleRed = {
  color: '#2b070b',
};
</script>

<style lang="css" scoped>

</style>
