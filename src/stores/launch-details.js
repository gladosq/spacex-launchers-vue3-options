import {defineStore} from 'pinia';
import axios from 'axios';
import {LAUNCHES_API} from '../common/enums/launches.js';

const useLaunchStore = defineStore('launchStore', {
  state: () => ({
    isLoading: false,
    launch: {},
    rocket: {}
  }),
  actions: {
    async getLaunch(launchId) {
      this.isLoading = true;
      await axios
        .get(`${LAUNCHES_API['launchDetails']}/${launchId}`)
        .then(response => {
          this.launch = response.data;
          /*--- Получаем id ракеты и делаем запрос на получение
          информации о ракете по методу getRocket ---*/
          this.getRocket(response.data.rocket);
        })
        .catch(error => {
          console.error(error);
        });
    },
    async getRocket(rocketId) {
      await axios
        .get(`${LAUNCHES_API['rocket']}/${rocketId}`)
        .then(response => {
          this.rocket = response.data;
        })
        .catch(error => {
          console.error(error);
        });
      this.isLoading = false;
    }
  }
});

export default useLaunchStore;
