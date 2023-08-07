import {defineStore} from 'pinia';
import axios from 'axios';
import dayjs from 'dayjs';
import {LAUNCHES_API} from '../common/enums/launches.js';
import {MAX_FILTER_YEAR, MIN_FILTER_YEAR} from '../common/constants.js';
import {SORTING} from '../common/enums/sorting.js';
import {sortByAsc, sortByDesc} from '../common/helpers.js';

const useLaunchesStore = defineStore('launchesStore', {
  state: () => ({
    isLoading: false,
    activeSorting: SORTING['Desc'],
    launches: []
  }),
  getters: {
    totalCountLaunches() {
      return this.launches.length;
    }
  },
  actions: {
    async getLaunches() {
      this.isLoading = true;
      const res = await axios
        .get(LAUNCHES_API['launchesList'])
        .then(response => {
          this.filterLaunchesByInterval(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      this.isLoading = false;
    },
    /*--- Фильтрация по успешным запускам и диапазону 2015-2019 ---*/
    filterLaunchesByInterval(launches) {
      this.launches = launches.filter((item) => {
        if (item.success && (
          dayjs(item.date_local).get('year') >= MIN_FILTER_YEAR
          && dayjs(item.date_local).get('year') <= MAX_FILTER_YEAR)) {
          return true;
        }
      });
    },
    /*--- Сортировка значений из стора по выбранному фильтру ---*/
    sortLaunches(type) {
      if (type === SORTING['Asc']) {
        this.activeSorting = SORTING['Asc'];
        this.launches.sort(sortByAsc);
      } else {
        this.activeSorting = SORTING['Desc'];
        this.launches.sort(sortByDesc);
      }
    }
  }
});

export default useLaunchesStore;
