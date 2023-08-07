<script>
import Logo from '../UI/Logo.vue';
import BackPageIcon from '../UI/Icons/BackPageIcon.vue';

export default {
  components: { Logo, BackPageIcon },
};
</script>

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
</template>

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
</style>
