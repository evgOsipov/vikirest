<template>
  <v-container class="fill-height justify-center flex-column ga-10" fluid>
    <v-card color="transparent" class="w-md-50 w-100">
      <v-card-title :style="textStyleRed" class="text-center text-wrap text-h4">
        Отзывы наших гостей
      </v-card-title>
      <v-card-item>
        <v-carousel height="min-content" hide-delimiters>
          <template #next="{ props }">
            <v-icon color="#2b070b" @click="props.onClick">mdi-chevron-right</v-icon>
          </template>
          <template #prev="{ props }">
            <v-icon color="#2b070b" @click="props.onClick">mdi-chevron-left</v-icon>
          </template>
          <v-carousel-item v-for="feedback in feedbackItems" :key="feedback.id">
            <v-container class="text-center" width="90%">
              <v-card-text :style="textStyleRed" class="text-h6 text-wrap">{{ feedback.name }}</v-card-text>
              <v-card-text :style="textStyleRed" class="text-body-1 text-wrap">{{ feedback.feedback }}</v-card-text>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-card-item>
    </v-card>
    <v-card color="transparent" class="w-md-50 w-100">
      <v-card-title :style="textStyleRed" class="text-center text-h4">
        Оставьте отзыв
      </v-card-title>
      <v-card-item>
        <v-form>
          <v-text-field
            v-model="name"
            :style="textStyleRed"
            base-color="#2b070b"
            color="#2b070b"
            variant="outlined"
            placeholder="Введите имя"
          >
          </v-text-field>
          <v-text-field
            v-model="email"
            :style="textStyleRed"
            base-color="#2b070b"
            color="#2b070b"
            variant="outlined"
            placeholder="Введите email"
          >
          </v-text-field>
          <v-textarea
            v-model="feedback"
            :style="textStyleRed"
            base-color="#2b070b"
            color="#2b070b"
            variant="outlined"
            placeholder="Оставьте ваш отзыв"
            no-resize
          >
          </v-textarea>
          <v-btn base-color="#2b070b" block @click="sendFeedback">
            Отправить
          </v-btn>
        </v-form>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const feedbackItems = ref([
  {
    id: 0,
    name: 'Иван',
    feedback: 'Отличный ресторан с изысканными блюдами и прекрасным обслуживанием!',
  },
  {
    id: 1,
    name: 'Мария',
    feedback: 'Прекрасное место для романтического ужина! Будем рекомендовать друзьям!',
  },
  {
    id: 2,
    name: 'Алексей',
    feedback: 'Отличная атмосфера и вкуснейшие блюда! Обязательно вернемся снова!',
  },
  {
    id: 3,
    name: 'Александра',
    feedback: 'Шикарный ресторан и безумно вкусная еда и напитки. Рекомендую всем!',
  },
]);

const name = ref();
const email = ref();
const feedback = ref();

const textStyleRed = {
  color: '#2b070b',
};

const sendFeedback = () => {
  if (!name.value || !feedback.value) {
    return;
  }
  const lastId = feedbackItems.value?.[feedbackItems.value?.length - 1] ?? 0;
  feedbackItems.value.push({
    id: lastId + 1,
    name: name.value,
    feedback: feedback.value,
  });
  name.value = '';
  feedback.value = '';
  email.value = '';
};
</script>

<style lang="css" scoped>

</style>
