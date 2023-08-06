<script>
import LaunchesList from '../modules/Launches/LaunchesList.vue';
import MainTitle from '../modules/Launches/MainTitle.vue';
export default {
  name: 'ViewHome',
  components: {
    MainTitle,
    LaunchesList,
  },
};
</script>

<template>
  <MainTitle/>
  <LaunchesList/>
</template>
