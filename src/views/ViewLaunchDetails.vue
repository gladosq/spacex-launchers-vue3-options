<script>
import Header from '../common/components/Header.vue';
import LaunchDetails from '../modules/Launches/LaunchDetails.vue';

export default {
  name: 'ViewLaunchDetails',
  components: {
    LaunchDetails,
    Header,
  }
};
</script>

<template>
  <Header/>
  <LaunchDetails/>
</template>
