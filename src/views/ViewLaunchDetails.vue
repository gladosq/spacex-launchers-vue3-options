<template>
  <section class='header'>
    <div class='header__logo'>
      <Logo />
    </div>
    <a href='/' class='header__link'>
      <BackPageIcon />
      <span>Вернуться на главную</span>
    </a>
  </section>
  <section
    v-if='isLoading'
    class='details'
  >
    <SkeletonDetails />
  </section>
  <section v-else class='details'>
    <h1>Запуск <span>{{ launch.name }}</span></h1>
    <div class='details__inner'>
      <img
        class='details__image'
        v-if='launch.links'
        :src='launch.links.patch.small'
        alt='Launch logo'
      />
      <p class='details__caption'>{{ launch.details }}</p>
    </div>
    <div class='details__rocket-wrapper'>
      <h2>Ракета <span>{{ rocket.name }}</span></h2>
      <div class='details__numbers'>
        <p>Ступени: {{ rocket.stages }}</p>
        <p>Бустеров: {{ rocket.boosters }}</p>
        <p>Первый полёт: {{ dayjs(rocket.first_flight).format('DD.MM.YYYY') }}</p>
      </div>
    </div>
    <div class='details__rocket-gallery'>
      <img
        v-if='rocket'
        v-for='(item, index) in rocket.flickr_images'
        :key='index'
        class='details__rocket-image'
        :src='item'
        alt='Rocket photo'
      />
    </div>
    <div class='details__info'>
      <div class='details__info-success'>
        <CorrectArrow />
        <span>Успешный запуск</span>
      </div>
      <p class='details__date'>
        {{ dayjs(launch.date_local).format('DD.MM.YYYY') }}
      </p>
    </div>
  </section>
</template>

<script>
import Header from '../common/components/Header.vue';
import Logo from '../common/UI/Logo.vue';
import BackPageIcon from '../common/UI/Icons/BackPageIcon.vue';
import SkeletonDetails from '../common/UI/Preloaders/SkeletonDetails.vue';
import CorrectArrow from '../common/UI/Icons/CorrectArrow.vue';
import { defineComponent } from 'vue';
import dayjs from 'dayjs';
import { mapActions, mapState } from 'pinia';
import useLaunchStore from '../stores/launch-details.js';

export default defineComponent({
  name: 'ViewLaunchDetails',
  components: {
    CorrectArrow,
    SkeletonDetails,
    BackPageIcon,
    Logo,
    Header,
  },
  computed: {
    id() {
      return this.$route.params.launchId;
    },
    ...mapState(useLaunchStore, {
      launch: 'launch',
      rocket: 'rocket',
      isLoading: 'isLoading',
    }),
  },
  methods: {
    dayjs,
    ...mapActions(useLaunchStore, {
      getLaunch: 'getLaunch',
    }),
  },
  mounted() {
    this.getLaunch(this.$route.params.launchId);
  },
});
</script>

<style lang='scss' scoped>
.header {
  margin-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
}

.header__logo {
  margin-bottom: 40px;

  svg {
    @media (max-width: $mobile-width) {
      width: 240px;
    }
  }
}

.header__link {
  color: $basic-font-color;
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background: none;
  width: max-content;
  margin-bottom: 40px;
}

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
