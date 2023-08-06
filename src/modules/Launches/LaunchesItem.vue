<script>
import CorrectArrow from '../../common/UI/Icons/CorrectArrow.vue';
import dayjs from 'dayjs';

export default {
  methods: {dayjs},
  components: {CorrectArrow},
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}

</script>

<template>
  <li class='item'>
    <a class='item__link' :href='`${data.id}`'>
      <div class='item__image-wrapper'>
        <img
          class='item__rocket-image'
          :src='`${data.links.patch.small}`'
          alt='Launch logo'
        />
      </div>
      <div class='item__inner-wrapper'>
        <h3>{{ data.name }}</h3>
        <div class='item__caption'>
          <CorrectArrow/>
          <span>Успешный запуск</span>
        </div>
      </div>
      <div class='item__date'>
        {{dayjs(data.date_local).format('DD.MM.YYYY')}}
      </div>
    </a>
  </li>
</template>

<style lang='scss' scoped>
.item {
  background: $card-gradient-color;
  box-shadow: $card-box-shadow;
  border: $card-border;
  border-radius: 5px;
  padding: 20px;
  transition: 0.25s ease-in-out;
  transition-property: box-shadow, transform;

  &:hover {
    box-shadow: 0 4px 24px 10px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
}

.item__link {
  display: flex;
  position: relative;
  gap: 20px;
}

.item__date {
  position: absolute;
  right: -6px;
  bottom: -6px;
  color: rgba(255, 255, 255, 0.60);
  font-size: 12px;
  font-weight: 400;
}

.item__image-wrapper {
  width: 100px;
  height: 100px;

  .item__rocket-image {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
}

.item__inner-wrapper {
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 14px;
    font-weight: 600;
  }
}

.item__caption {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
