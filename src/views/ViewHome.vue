<template>
  <section class='main-title'>
    <h1>Успешные космические миссии</h1>
    <Logo />
    <h2>За 2015-2019</h2>
  </section>
  <section class='launches'>
    <div class='launches__container'>
      <span>Количество запусков: {{ totalCountLaunches }}</span>
      <div class='launches__sorting'>
        <span>Сортировка:</span>
        <div class='launches__sorting-inner'>
          <button
            :class='[`button`, {button__active: activeSorting === getSorting[`Asc`]}]'
            @click='sortLaunches(getSorting[`Asc`])'
          >
            По убыванию
          </button>
          <button
            :class='[`button`, {button__active: activeSorting === getSorting[`Desc`]}]'
            @click='sortLaunches(getSorting[`Desc`])'
          >
            По возрастанию
          </button>
        </div>
      </div>
    </div>
    <SkeletonLaunches v-if='isLoading' />
    <ul v-else class='launches__list'>
      <LaunchesItem
        v-for='item in launches'
        :key='item.id'
        :data='item'
      />
    </ul>
  </section>
</template>

<script>
import Logo from '../common/UI/Logo.vue';
import SkeletonLaunches from '../common/UI/Preloaders/SkeletonLaunches.vue';
import { SORTING } from '../common/enums/sorting.js';
import useLaunchesStore from '../stores/launches.js';
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'pinia';
import LaunchesItem from '../modules/Launches/LaunchesItem.vue';

export default defineComponent({
  name: 'ViewHome',
  components: {
    LaunchesItem,
    SkeletonLaunches,
    Logo
  },
  computed: {
    getSorting() {
      return SORTING
    },
    ...mapState(useLaunchesStore, {
      launches: 'launches',
      activeSorting: 'activeSorting',
      isLoading: 'isLoading',
      totalCountLaunches: 'totalCountLaunches',
    }),
  },
  methods: {
    ...mapActions(useLaunchesStore, {
      getLaunches: 'getLaunches',
      sortLaunches: 'sortLaunches',
    }),
  },
  mounted() {
    this.getLaunches();
  },
});
</script>

<style scoped lang='scss'>
.main-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  padding-left: 20px;
  padding-right: 20px;

  h1 {
    font-size: 44px;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-top: 100px;
    text-align: center;

    @media (max-width: $tablet-width) {
      margin-top: 30px;
      font-size: 28px;
    }
  }

  h2 {
    font-weight: 400;
    font-size: 26px;
    margin-top: 30px;
    text-transform: uppercase;
    text-align: center;
  }

  @media (max-width: $tablet-width) {
    margin-bottom: 20px;
  }

  svg {
    @media (max-width: $mobile-width) {
      width: 220px;
    }
  }
}

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
