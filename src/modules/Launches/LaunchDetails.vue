<script>
import CorrectArrow from '../../common/UI/Icons/CorrectArrow.vue';
import {useRoute} from 'vue-router';
import useLaunchStore from '../../stores/launch-details.js';
import SkeletonDetails from '../../common/UI/Preloaders/SkeletonDetails.vue';
import dayjs from 'dayjs';
import LaunchesItem from './LaunchesItem.vue';

export default {
  methods: {dayjs},
  components: {LaunchesItem, SkeletonDetails, CorrectArrow},
  data() {
    return {
      launchStore: useLaunchStore()
    }
  },
  mounted() {
    const route = useRoute();
    this.launchStore.getLaunch(route.params.launchId);
  }
}
</script>

<template>
  <section
    v-if='launchStore.isLoading'
    class='details'
  >
    <SkeletonDetails/>
  </section>
  <section v-else class='details'>
    <h1>Запуск <span>{{launchStore.launch.name}}</span></h1>
    <div class='details__inner'>
      <img
        class='details__image'
        v-if='launchStore.launch.links'
        :src='launchStore.launch.links.patch.small'
        alt='Launch logo'
      />
      <p class='details__caption'>{{launchStore.launch.details}}</p>
    </div>
    <div class='details__rocket-wrapper'>
      <h2>Ракета <span>{{launchStore.rocket.name}}</span></h2>
      <div class='details__numbers'>
        <p>Ступени: {{launchStore.rocket.stages}}</p>
        <p>Бустеров: {{launchStore.rocket.boosters}}</p>
        <p>Первый полёт: {{dayjs(launchStore.rocket.first_flight).format('DD.MM.YYYY')}}</p>
      </div>
    </div>
    <div class='details__rocket-gallery'>
      <img
        v-if='launchStore.rocket'
        v-for='(item, index) in launchStore.rocket.flickr_images'
        :key='index'
        class='details__rocket-image'
        :src='item'
        alt='Rocket photo'
      />
    </div>
    <div class='details__info'>
      <div class='details__info-success'>
        <CorrectArrow/>
        <span>Успешный запуск</span>
      </div>
      <p class='details__date'>
        {{dayjs(launchStore.launch.date_local).format('DD.MM.YYYY')}}
      </p>
    </div>
  </section>
</template>

<style lang='scss' scoped>
.details {
  border-radius: 5px;
  border: $card-border;
  background: $card-gradient-color;
  box-shadow: $card-box-shadow;
  padding: 36px;
  margin: 0 0 200px;

  h1 {
    color: $basic-font-color;
    font-size: 40px;
    text-transform: uppercase;
    margin-top: 0;

    span {
      color: $basic-green-color;
    }

    @media (max-width: $tablet-width) {
      font-size: 24px;
    }
  }

  @media (max-width: $mobile-width) {
    padding: 20px;
  }
}

.details__inner {
  display: flex;
  gap: 30px;
  align-items: center;

  .details__image {
    width: 93px;
    height: 93px;
    object-fit: contain;
  }

  @media (max-width: $mobile-width) {
    flex-direction: column;
  }
}

.details__rocket-wrapper {
  margin-top: 60px;

  h2 {
    color: $basic-font-color;
    font-size: 32px;
    text-transform: uppercase;

    span {
      color: $basic-green-color;
    }

    @media (max-width: $tablet-width) {
      font-size: 20px;
    }
  }
}

.details__numbers {
  p {
    margin-bottom: 14px;
    margin-top: 4px;
  }
}

.details__caption {
  @media (max-width: $tablet-width) {
    font-size: 13px;
  }
}

.details__rocket-gallery {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 80px;

  .details__rocket-image {
    width: 240px;
    height: 166px;
    object-fit: cover;
    border-radius: 4px;
  }

  @media (max-width: $mobile-width) {
    flex-direction: column;
    align-items: center;
  }
}

.details__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.details__info-success {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
