<script>

</script>

<template>
  <div class='skeleton'>
    <div class='skeleton__inner'>
      <div class='skeleton__title'></div>
      <div class='skeleton__container'>
        <div class='skeleton__block'></div>
        <div class='skeleton__block'></div>
      </div>
    </div>
    <div class='skeleton__inner'>
      <div class='skeleton__title'></div>
      <div class='skeleton__container'>
        <div class='skeleton__block'></div>
        <div class='skeleton__block'></div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.skeleton {
  display: flex;
  flex-direction: column;
  gap: 70px;
}

.skeleton__inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skeleton__title {
  width: 50%;
  height: 40px;
  background: linear-gradient(110deg,
    rgba(0, 0, 0, 0.1) 34%,
    rgba(255, 255, 255, 0.05) 38%,
    rgba(255, 255, 255, 0.05),
    rgba(0, 0, 0, 0.1) 49%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 2s shine linear infinite;
  animation-fill-mode: forwards;
}

.skeleton__container {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 20px;
  position: relative;
}

.skeleton__block {
  background: linear-gradient(110deg,
    rgba(0, 0, 0, 0.1) 34%,
    rgba(255, 255, 255, 0.05) 38%,
    rgba(255, 255, 255, 0.05),
    rgba(0, 0, 0, 0.1) 49%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 2s shine linear infinite;
  animation-fill-mode: forwards;
  width: 100%;
  height: 130px;
}

@keyframes shine {
  from {
    background-position-x: -40%;
  }
  to {
    background-position-x: 100%;
  }
}
</style>
