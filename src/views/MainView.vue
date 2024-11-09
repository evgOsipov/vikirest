<template>
  <MainPage/>
  <!-- <div id="myModal" class="modal">
      <div class="modal-content">
          <span class="close">&times;</span>
          <h1>Зарезервировать</h1>
          <form id="bookingForm">
              <label for="date">Дата:</label>
              <input type="date" id="date" name="date" required><br>

              <label for="time">Время:</label>
              <input type="time" id="time" name="time" required><br>

              <label for="preferences">Пожелания и номер телефона:</label>
              <textarea id="preferences" name="preferences" rows="4" cols="50"></textarea><br>

              <label for="location">Расположение стола:</label>
              <select id="location" name="location">

              <option value="window">У окна</option>
              <option value="quiet">Спокойное место</option>
              <option value="bar">У барной стойки</option>
              </select><br>

              <button type="submit">Отправить</button>
          </form>
      </div>
  </div> -->
</template>

<script lang="ts" setup>
import MainPage from '@/components/main-page/MainPage.vue';

// document.addEventListener('DOMContentLoaded', function () {
//   const prevBtn = document.querySelector('.prev-btn');
//   const nextBtn = document.querySelector('.next-btn');
//   const reviewsContainer = document.querySelector('.reviews-container');
//   const reviews = document.querySelectorAll('.review');
//   const reviewWidth = reviews[0].offsetWidth;
//
//   let currentIndex = 0;
//
//   // Функция для перемещения карусели влево
//   function slideLeft() {
//     if (currentIndex > 0) {
//       currentIndex--;
//       const newPosition = -currentIndex * reviewWidth;
//       reviewsContainer.style.transform = `translateX(${newPosition}px)`;
//     }
//   }
//
//   // Функция для перемещения карусели вправо
//   function slideRight() {
//     if (currentIndex < reviews.length - 1) {
//       currentIndex++;
//       const newPosition = -currentIndex * reviewWidth;
//       reviewsContainer.style.transform = `translateX(${newPosition}px)`;
//     }
//   }
//
//   // Обработчики событий для кнопок "Предыдущий" и "Следующий"
//   prevBtn.addEventListener('click', slideLeft);
//   nextBtn.addEventListener('click', slideRight);
// });
//
//
// // Получение ссылок на элементы
// var modal = document.getElementById('myModal');
// var btn = document.getElementById('openModalBtn');
// var span = document.getElementsByClassName('close')[0];
//
// // Открытие модального окна при клике на кнопку
// btn.onclick = function () {
//   modal.style.display = 'block';
// };
//
// // Закрытие модального окна при клике на крестик
// span.onclick = function () {
//   modal.style.display = 'none';
// };
//
// // Закрытие модального окна при клике вне его
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// };
</script>

<style lang="css" scoped>

</style>
