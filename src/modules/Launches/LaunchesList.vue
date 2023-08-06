<script>
import useLaunchesStore from '../../stores/launches.js';
import LaunchesItem from './LaunchesItem.vue';
import SkeletonLaunches from '../../common/UI/Preloaders/SkeletonLaunches.vue';
import {SORTING} from '../../common/enums/sorting.js';

export default {
  computed: {
    SORTING() {
      return SORTING
    }
  },
  components: {SkeletonLaunches, LaunchesItem},
  data() {
    return {
      launchesStore: useLaunchesStore()
    }
  },
  mounted() {
    this.launchesStore.getLaunches();
  }
}
</script>

<template>
  <section class='launches'>
    <div class='launches__container'>
      <span>Количество запусков: {{ launchesStore.totalCountLaunches }}</span>
      <div class='launches__sorting'>
        <span>Сортировка:</span>
        <div class='launches__sorting-inner'>
          <button
            :class="[`button`, {button__active: launchesStore.activeSorting === SORTING[`ASC`]}]"
            @click='launchesStore.sortLaunches(SORTING[`ASC`])'
          >
            По убыванию
          </button>
          <button
            :class="[`button`, {button__active: launchesStore.activeSorting === SORTING[`DESC`]}]"
            @click='launchesStore.sortLaunches(SORTING[`DESC`])'
          >
            По возрастанию
          </button>
        </div>
      </div>
    </div>
    <SkeletonLaunches v-if='launchesStore.isLoading'/>
    <ul v-else class='launches__list' >
      <LaunchesItem
        v-for='item in launchesStore.launches'
        :key='item.id'
        :data='item'
      />
    </ul>
  </section>
</template>

<style lang='scss' scoped>
.launches {
  margin-bottom: 200px;
}

.launches__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style-type: none;
  margin: 0;
  padding: 0;
  gap: 20px;

  @media (max-width: $tablet-width) {
    display: flex;
    flex-direction: column;
  }
}

.launches__container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;

  span {
    opacity: 0.4;
  }

  @media (max-width: $tablet-width) {
    flex-direction: column;
  }
}

.launches__sorting-inner {
  display: flex;
  gap: 10px;
}

.launches__sorting {
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  span {
    padding-right: 20px;
    padding-bottom: 6px;
  }
}

.button {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;
  transition: 0.25s ease-in-out;
  transition-property: transform, border, opacity;
  opacity: 0.6;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: $mobile-width) {
    font-size: 14px;
    padding: 10px;
  }
}

.button__active {
  opacity: 1;
  border: 1px solid $basic-font-color;

  &:hover {
    transform: translateY(0);
  }
}
</style>
