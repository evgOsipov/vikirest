import { defineStore } from 'pinia';
import { shallowRef } from 'vue';

export const useMap = defineStore('initMap', () => {
  const map = shallowRef();

  const initMap = async (): Promise<void> => {
    map.value = new ymaps.Map('map',
        {
          center: [55.844773, 37.456936],
          zoom: 15,
          controls: ['zoomControl', 'rulerControl'],
        }
    );

    const marker = new ymaps.Placemark([55.844773, 37.456936], {
      hintContent: "Ресторан VG",
      balloonContent: "Ресторан VG"
    });

    map.value.geoObjects.add(marker);
  }

  return {
    initMap,
  }
});